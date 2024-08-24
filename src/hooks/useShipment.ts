import {shipmentListFetcher} from '@shipex/api/shipment/shipmentApi';
import useSWR from 'swr';

export const useShipmentList = (searchTerm: string) => {
  const url = `/frappe.client.get_list?doctype=AWB&fields=["*"]&filters={"name":["like","%${searchTerm}%"]}`;
  const {data, error, isLoading, mutate, isValidating} = useSWR(
    url,
    shipmentListFetcher,
  );
  const refresh = () => {
    mutate();
  };
  return {
    shipmentList: data?.message,
    isLoading,
    isError: error,
    refresh,
    refetching: isValidating,
  };
};
