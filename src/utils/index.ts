import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {Cookies} from './types';

export const extractCookies = async (response: any) => {
  const cookiesHeader = response.headers['set-cookie'];
  if (cookiesHeader) {
    const cookies: {sid: string} = cookiesHeader
      .join('; ')
      .split('; ')
      .reduce((acc: Cookies, cookie: string) => {
        const [key, value] = cookie.split('=');

        switch (key) {
          case 'sid':
            acc.sid = value;
            break;
        }
        return acc;
      }, {} as Cookies);

    if (cookies.sid) {
      await AsyncStorage.setItem('sid', cookies.sid);
    }
  }
  return undefined;
};

export const handleError = (err: any, show = true) => {
  let {error: response, message: body, statusCode: status} = err;
  if (body && !response) {
    response = {
      data: body,
      status: status,
    };
  }

  if (show && status == 500) {
    Toast.show({
      type: 'error',
      text1: `We're experiencing a temporary hiccup. please try again`,
      text2: '',
      visibilityTime: 4000,
    });
    return {success: false, status, message: body};
  }

  if (show && status !== 401) {
    Toast.show({
      type: 'error',
      text1: 'Un authorized. Please try again',
      text2: '',
      visibilityTime: 4000,
    });
  }
  return {success: false, status, message: body};
};
