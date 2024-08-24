import axiosInstance from '../axiosInstance';
import {ShipmentResponse} from '../types';

export const shipmentListFetcher = async (
  url: string,
): Promise<ShipmentResponse> => {
  const response = await axiosInstance.get<ShipmentResponse>(url);
  return response.data;
};
