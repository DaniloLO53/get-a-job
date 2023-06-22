"use client"

import { InputBarProps } from "@/utils/interfaces";
import React, { FC, HTMLAttributes } from "react";
import InputBarEmail from "./ui/InputBarEmail";
import InputBarPassword from "./ui/InputBarPassword";

interface SignInInputBarsProps extends Omit<InputBarProps, "password"> {}

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
