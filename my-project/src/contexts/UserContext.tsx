"use client"

import useSignIn from '@/hooks/api/useSignIn';
import useSignOut from '@/hooks/api/useSignOut';
import { getProfile } from '@/services/userApi';
import { IError } from '@/utils/IError';
import { useRouter } from 'next/navigation';
import { createContext, MutableRefObject, ReactElement, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import useLocalStorage from '../hooks/useLocalStorage';

interface IUserContext {
  // userToken: any;
  // setUserToken: any;
  userData: any;
  setUserData: any;
  submit: any;
  signInLoading: any;
  signInModalOpened: any;
  setSignInModalOpened: any;
  signOutHandler: any;
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
  // const [userToken, setUserToken] = useLocalStorage('userToken', {});
  const { signIn, signInLoading } = useSignIn();
  const { signOut, signOutLoading } = useSignOut();
  const router =  useRouter();
  const [signInModalOpened, setSignInModalOpened] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  console.log('USER CONTEXT RENDERED')

  async function signOutHandler() {
    const userToken = JSON.parse(localStorage.getItem("userToken") || "null");

    try {
      if (userToken && userToken.token) {
        await signOut(userToken.token);
        localStorage.setItem("userToken", "null");
        window.location.reload()
      }
    } catch (error) {
      if ((error as IError).response.data) {
        toast.error(((error as IError)).response.data.message);
      } else {
        toast.error("Erro ao realizar cadastro.");
      }
    }
  }
  async function loadProfile() {
    const userToken = JSON.parse(localStorage.getItem("userToken") || "null");

    if (userToken && userToken.token) {
      const profile = await getProfile(userToken.token);
      console.log('GETTED')
      setUserData(profile);
    } else {
      setUserData({ user: null })
    }
  }

  async function submit(data: any) {
    try {
      const response = await signIn(data);
      localStorage.setItem("userToken", JSON.stringify(response));
      setSignInModalOpened(false);
      if (window.location.pathname.includes("sign-in")) {
        router.push("/jobs")
      } else {
        window.location.pathname = "/jobs"
      }
    } catch (error) {
      if ((error as IError).response.data) {
        toast.error(((error as IError)).response.data.message);
      } else {
        toast.error("Erro ao realizar cadastro.");
      }
    }
  }

  return (
    <UserContext.Provider value={{
      // userToken,
      // setUserToken,
      submit,
      signInLoading,
      setSignInModalOpened,
      signInModalOpened,
      signOutHandler,
      setUserData,
      userData,
      loadProfile
    }}>
      {children}
    </UserContext.Provider>
  );
}
