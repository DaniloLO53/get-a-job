"use client"

import React, { useState, FC, FormHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import SignInInputBars from "./SignInInputBars";
import { validationErrorMessages } from "@/utils/messages";
import { InputType } from "@/utils/interfaces";

export interface FormProps extends
  FormHTMLAttributes<HTMLFormElement> {
  isLoading: boolean;
  submit: any;
}

const LoginForm: FC<FormProps> = ({ isLoading, submit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [inputType, setInputType] = useState<InputType>("password");

  return (
    <form onSubmit={handleSubmit(submit)} className="relative w-full h-full
    flex flex-col items-center justify-center">
      <SignInInputBars
        errors={errors}
        isLoading={isLoading}
        register={register}
        inputType={inputType}
        setInputType={setInputType}
        validationErrorMessages={validationErrorMessages}
      />
      <div className="mt-5">
        <Button
          isLoading={isLoading}
          disabled={!!errors.password || !!errors.email}
          variant={(!!errors.password || !!errors.email) ? "transparent" : "default"
        }>
          Entrar
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
