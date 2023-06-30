"use client"

import useSignIn from '@/hooks/api/useSignIn';
import { getProfile } from '@/services/userApi';
import { IError } from '@/utils/IError';
import { useRouter } from 'next/navigation';
import { createContext, ReactElement, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import useLocalStorage from '../hooks/useLocalStorage';

interface IUserContext {
  userToken: any;
  setUserToken: any;
  userData: any;
  setUserData: any;
  submit: any;
  signInLoading: any;
  signInModalOpened: any;
  setSignInModalOpened: any;
  loadProfile: any;
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
  const [userToken, setUserToken] = useLocalStorage('userData', {});
  const { signIn, signInLoading } = useSignIn();
  const router =  useRouter();
  const [signInModalOpened, setSignInModalOpened] = useState(false);
  const [userData, setUserData] = useState(null);

  const loadProfile = async () => {
    const { token } = userToken;

    if (token) {
      const profile = await getProfile(token);
      setUserData(profile);
      console.log('PROFILE: ', profile);
    } else {
      alert('No token')
    }
  }

  async function submit(data: any) {
    try {
      const response = await signIn(data);
      setUserToken(response);
      setSignInModalOpened(false);
      router.push("/jobs")
    } catch (error) {
      if ((error as IError).response.data) {
        toast.error(((error as IError)).response.data.message);
      } else {
        toast.error("Erro ao realizar cadastro.");
      }
    }
  }

  return (
    <UserContext.Provider value={{ userToken, setUserToken, submit, signInLoading, setSignInModalOpened, signInModalOpened, setUserData, userData, loadProfile }}>
      {children}
    </UserContext.Provider>
  );
}
