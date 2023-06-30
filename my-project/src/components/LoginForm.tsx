"use client"

import React, { useState, FC, FormHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import SignInInputBars from "./SignInInputBars";
import { validationErrorMessages } from "@/utils/messages";
import { InputType } from "@/utils/interfaces";
import { useUserContext } from "@/contexts/UserContext";

export interface FormProps extends
  FormHTMLAttributes<HTMLFormElement> {
}

const LoginForm: FC<FormProps> = ({ }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [inputType, setInputType] = useState<InputType>("password");
  const { signInLoading, submit } = useUserContext();

  return (
    <form onSubmit={handleSubmit(submit)} className="relative w-full h-full
    flex flex-col items-center justify-center">
      <SignInInputBars
        errors={errors}
        isLoading={signInLoading}
        register={register}
        inputType={inputType}
        setInputType={setInputType}
        validationErrorMessages={validationErrorMessages}
      />
      <div className="mt-5">
        <Button
          isLoading={signInLoading}
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
