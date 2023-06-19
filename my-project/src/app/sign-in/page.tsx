"use client"

import LoginForm from "@/components/LoginForm";
import Image from "next/image"
import React, { useState } from "react";
import { Divider } from '@mui/material';
import Button from "@/components/ui/Button";
import Link from "next/link";
import getGoogleUrl from "@/lib/getGoogleUrl";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-primary-500 h-screen flex items-center justify-evenly relative">
      <div className="w-[450px] flex flex-col items-center justify-center rounded-lg
      bg-white pb-[40px]">
        <Image
          src="/logo.svg"
          alt="Vercel Logo"
          className="m-[45px]"
          width={350}
          height={100}
          priority
        />
        <LoginForm isLoading={isLoading} />
        <br></br>
        <Link href="#">
          <p className="underline text-blue-800">
            Não possui uma conta ainda? Cadastre-se!
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
    </div>
  )
}
