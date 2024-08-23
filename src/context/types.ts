import React, {ReactNode} from 'react';

export type AuthContextType = {
  auth: {sid: string; userid: string; fullname: string};
  setAuth: React.Dispatch<
    React.SetStateAction<{sid: string; userid: string; fullname: string}>
  >;
};

export type AuthProviderProps = {
  children: ReactNode;
};
