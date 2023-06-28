"use client"

import { useSearchBarContext } from "@/contexts/SearchBarContext";
import useSearchBar from "@/hooks/api/useSearchBar";
import React, { FC, HTMLAttributes, useState } from "react";
import JobCardSearchBar from "./JobCardSearchBar";
import JobsDashboard from "./JobsDashboard";
import InputBar from "./ui/InputBar";
import InputBarDebounced from "./ui/InputBarDebounced";

export interface TopBarProps extends
  HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
}

const TopBar: FC<TopBarProps> = ({ }) => {
  const { searchHandler, search, setSearch } = useSearchBarContext();

  console.log('Searchh', search)

  return (
    <header
      className="border-solid border-b-[1px] border-b-secondary-100 flex
      justify-center items-center h-[60px] fixed w-[calc(100vw-380px)] backdrop-filter backdrop-blur-lg"
    >
      <div className="w-[50%]">
        <InputBarDebounced
          className="p-md"
          placeholder="Procure sua vaga"
          valueHandler={searchHandler}
          search={search}
          setSearch={setSearch}
          debounceTimeout={1000}
        />
      </div>
    </header>
  )
}

export default TopBar
