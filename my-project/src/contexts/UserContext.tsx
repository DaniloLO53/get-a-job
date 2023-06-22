"use client"

import { createContext, ReactElement, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface IUserContext {
  userData: any;
  setUserData: any;
}

const UserContext = createContext<IUserContext | null>(null);

export function useUserContext(): IUserContext {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}

export function UserProvider({ children }: any): ReactElement {
  const [userData, setUserData] = useLocalStorage('userData', {});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
