import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useGetAuthData = () => {
  const [auth, setAuth] = useState<{
    sid: string;
    userid: string;
    fullname: string;
  }>({
    sid: '',
    userid: '',
    fullname: '',
  });
  const loadAuth = async () => {
    const sid = await AsyncStorage.getItem('sid');
    const userid = await AsyncStorage.getItem('userid');
    const fullname = await AsyncStorage.getItem('fullname');
    if (sid && userid && fullname) {
      setAuth({sid, userid, fullname});
    }
  };
  useEffect(() => {
    loadAuth();
  }, []);
  return {
    auth,
    setAuth,
  };
};

export default useGetAuthData;
