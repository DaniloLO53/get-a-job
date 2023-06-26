"use client"

import React, { useState, FC, FormHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import SignInInputBars from "./SignInInputBars";
import InputBarConfirmPassword from "./ui/InputBarConfirmPassword";
import { validationErrorMessages } from "../utils/messages";
import { InputType } from "@/utils/interfaces";

export interface FormProps extends
  FormHTMLAttributes<HTMLFormElement> {
  isLoading: boolean;
  submit: any;
}

const SignUpForm: FC<FormProps> = ({ isLoading, submit }) => {
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const password = watch("password");
  const [inputType, setInputType] = useState<InputType>("password");

  const barProps = {
    register, errors, isLoading, validationErrorMessages, inputType, setInputType
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="relative w-full h-full
    flex flex-col items-center justify-center">
      <SignInInputBars { ...barProps } />
      <InputBarConfirmPassword { ...barProps } password={password} />
      <div className="mt-5">
        <Button
          isLoading={isLoading}
          disabled={!!errors.password || !!errors.email}
          variant={(!!errors.password || !!errors.email) ? "transparent" : "default"}
        >
          Cadastrar
        </Button>
      </div>
    </form>
  )
}

export default SignUpForm
