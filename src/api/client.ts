import {extractCookies} from '@shipex/utils';
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

// export const fetcher = (url: string, data?: any) =>
//   axiosInstance.post(url, data).then(res => {
//     extractCookies(res);
//     return res.data;
//   });

export const fetcher = async <T = any>(url: string, data?: any): Promise<T> => {
  try {
    const response = await axiosInstance.post(url, data);
    extractCookies(response);
    // Do something with cookies if needed
    //   console.log(cookies);
    return response.data;
  } catch (error) {
    // Handle errors accordingly
    console.error('Fetcher error:', error);
    throw error;
  }
};

// Use `fetcher` with appropriate type for responses
export const loginFetcher = (data: {usr: string; pwd: string}) =>
  fetcher<LoginResponse>('/login', data);
