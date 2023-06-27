"use client"

import useSearchBar from "@/hooks/api/useSearchBar";
import React, { FC, HTMLAttributes, useState } from "react";
import JobCardSearchBar from "./JobCardSearchBar";
import JobsDashboard from "./JobsDashboard";
import InputBar from "./ui/InputBar";
import InputBarDebounced from "./ui/InputBarDebounced";

export interface TopBarProps extends
  HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
  searchHandler: any
}

const TopBar: FC<TopBarProps> = ({ searchHandler }) => {
  

  return (
    <header
      className="border-solid border-b-[1px] border-b-secondary-100 flex
      justify-center items-center h-[60px] fixed w-[calc(100vw-380px)] backdrop-filter backdrop-blur-lg"
    >
      <div className="w-[50%]">
        <InputBarDebounced
          className="p-md"
          inputType="text"
          placeholder="Procure sua vaga"
          valueHandler={searchHandler}
          debounceTimeout={2000}
        />
      </div>
    </header>
  )
}

export default TopBar
