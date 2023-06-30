"use client"

import { useSearchBarContext } from "@/contexts/SearchBarContext";
import useSearchBar from "@/hooks/api/useSearchBar";
import React, { FC, HTMLAttributes, useState } from "react";
import JobCardSearchBar from "./JobCardSearchBar";
import JobsDashboard from "./JobsDashboard";
import Button from "./ui/Button";
import InputBar from "./ui/InputBar";
import InputBarDebounced from "./ui/InputBarDebounced";

export interface TopBarProps extends
  HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
  searchHandler: any
  search: any
  setSearch: any;
  setSearchBarFocused: any;
  inputRef: any;
  clickRef: any;
}

const TopBar: FC<TopBarProps> = ({ searchHandler, search, setSearch, setSearchBarFocused, inputRef, clickRef }) => {
  

  return (
    <header
      className="border-solid border-b-[1px] border-b-secondary-100 flex
      justify-around items-center h-[60px] fixed w-screen backdrop-filter backdrop-blur-lg"
    >
      <Button
        sizes="sm"
        className="md:hidden"
      >
        Filtrar
      </Button>
      <div
        className="hidden md:flex"
      >
        Outros
      </div>
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
      <div>
        Outros
      </div>
    </header>
  )
}

export default TopBar
