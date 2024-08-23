import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginFetcher} from '@shipex/api/client';
import {handleError} from '@shipex/utils';
import {useState} from 'react';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const login = async (usr: string, pwd: string) => {
    try {
      setLoading(true);
      const response = await loginFetcher({usr, pwd});

      await AsyncStorage.setItem('full_name', response.full_name);
      await AsyncStorage.setItem('user', usr);

      setLoading(false);
      return response;
    } catch (error) {
      handleError(error);
      setLoading(false);
    }
  };

  return {login, loading};
};
