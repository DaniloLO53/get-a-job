"use client"

import SignUpForm from "@/components/SignUpForm";
import Image from "next/image"
import React, { useState } from "react";
import { Divider } from '@mui/material';
import Button from "@/components/ui/Button";
import Link from "next/link";
import getGoogleUrl from "@/lib/getGoogleUrl";
import useSignUp from "@/hooks/api/useSignUp";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { IError } from "@/utils/IError";
import { ThreeDots } from  'react-loader-spinner'

export default function SignUp() {
  const { signUp, signUpLoading } = useSignUp();
  const router =  useRouter();

  async function submit(data: any) {
    try {
      await signUp(data);
      toast.success("Cadastro realizado com sucesso!")
      router.push("/sign-in")
    } catch (error) {
      if ((error as IError).response.status === 409) {
        toast.error("Usuário já cadastrado");
      } else {
        toast.error("Erro ao realizar cadastro.");
      }
    }
  }

  return (
    <div className="bg-primary-500 h-screen flex items-center justify-evenly relative">
      {
        signUpLoading
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
        : <div className="w-[450px] flex flex-col items-center justify-center rounded-lg
          bg-white pb-[40px]">
            <Image
              src="/logo.svg"
              alt="Vercel Logo"
              className="m-[45px]"
              width={350}
              height={100}
              priority
            />
            <SignUpForm isLoading={signUpLoading} submit={submit} />
            <br></br>
            <Link href="/sign-in">
              <p className="underline text-blue-800">
                Já possui uma conta? Faça login!
              </p>
            </Link>
            <Divider className="w-[80%] border-t-2 border-gray-300 my-9">OU</Divider>
            <div className="w-[80%]">
              <Button className="flex items-center justify-around" type="button">
                <Link href={getGoogleUrl()}>
                  <span className="bg-white rounded-sm p-2">
                    <Image
                      className="inline"
                      src="/google.svg"
                      alt="Google logo"
                      width={32}
                      height={32}
                      priority
                    />
                  </span>
                  &nbsp; &nbsp; &nbsp;
                  <span>Entre com sua conta Google</span>
                </Link>
              </Button>
            </div>
          </div>
      }
    </div>
  )
}
