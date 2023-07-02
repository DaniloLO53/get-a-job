"use client"

import React from "react";
import useSignIn from "@/hooks/api/useSignIn";
import { ThreeDots } from  'react-loader-spinner'
import SignInMain from "@/components/SignInMain";

export default function SignIn() {
  const { signInLoading } = useSignIn();

  return (
    <div className="bg-primary-500 h-screen flex items-center justify-evenly relative">
      {
        signInLoading
        ? <ThreeDots 
            height="80"
            width="80" 
            radius="9"
            color="#99FFFF" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        : <SignInMain />
      }
    </div>
  )
}
