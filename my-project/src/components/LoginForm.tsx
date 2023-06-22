"use client"

import React, { InputHTMLAttributes, useState, FC, FormHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import SignInInputBars from "./SignInInputBars";
import { validationErrorMessages } from "@/utils/messages";

export interface FormProps extends
  FormHTMLAttributes<HTMLFormElement> {
  isLoading?: boolean;
}

const LoginForm: FC<FormProps> = ({ isLoading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [inputType, setInputType] = useState("password");

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative w-full h-full
    flex flex-col items-center justify-center">
        <SignInInputBars
          errors={errors}
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
