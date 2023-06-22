"use client"

import React, { FC, HTMLAttributes } from "react";
import InputBarEmail from "./ui/InputBarEmail";
import InputBarPassword from "./ui/InputBarPassword";

interface SignInInputBarsProps {
  isLoading?: boolean;
  register: any;
  errors: any;
  setInputType: any;
  inputType: any;
  validationErrorMessages: any;
}

export interface FragmentProps extends
  HTMLAttributes<HTMLElement>, SignInInputBarsProps {}

const SignInInputBars: FC<FragmentProps> = (props: SignInInputBarsProps) => {  
  return (
    <>
      <InputBarEmail { ...props } />
      <InputBarPassword { ...props } />
    </>
  )
}

export default SignInInputBars
