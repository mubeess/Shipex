import React, {createContext} from 'react';

import {AuthContextType, AuthProviderProps} from '../types';
import useGetAuthData from '../hooks/useGetAuthData';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const {auth, setAuth} = useGetAuthData();

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};
