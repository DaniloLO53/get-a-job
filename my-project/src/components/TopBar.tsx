"use client"

import React, { FC, HTMLAttributes } from "react";
import InputBar from "./ui/InputBar";

export interface TopBarProps extends
  HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
}

const TopBar: FC<TopBarProps> = ({ }) => {
  return (
    <header
      className="bg-transparent border-solid border-b-[1px] border-b-secondary-100 flex justify-around items-center h-[60px]"
    >
      <div className="w-[50%]">
        <InputBar
          className="p-md"
          inputType="text"
          placeholder="Procure sua vaga"
        />
      </div>
    </header>
  )
}

export default TopBar
