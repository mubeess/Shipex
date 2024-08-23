import {extractCookies, handleError} from '@shipex/utils';
import {LoginResponse} from '@shipex/utils/types';
import axios from 'axios';

const API_URL = 'https://shippex-demo.bc.brandimic.com/api/method';

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetcher = async <T = any>(url: string, data?: any): Promise<T> => {
  try {
    const response = await axiosInstance.post(url, data);
    extractCookies(response);

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const loginFetcher = (data: {usr: string; pwd: string}) =>
  fetcher<LoginResponse>('/login', data);
