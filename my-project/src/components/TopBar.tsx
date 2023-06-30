"use client"

import SignIn from "@/app/sign-in/page";
import { useSearchBarContext } from "@/contexts/SearchBarContext";
import { useUserContext } from "@/contexts/UserContext";
import useSearchBar from "@/hooks/api/useSearchBar";
import { getProfile } from "@/services/userApi";
import React, { FC, HTMLAttributes, useEffect, useState } from "react";
import JobCardSearchBar from "./JobCardSearchBar";
import JobsDashboard from "./JobsDashboard";
import ModalContainer from "./ModalContainer";
import SignInMain from "./SignInMain";
import Button from "./ui/Button";
import InputBar from "./ui/InputBar";
import InputBarDebounced from "./ui/InputBarDebounced";

export interface TopBarProps extends
  HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
  setSearchBarFocused: any;
}

const TopBar: FC<TopBarProps> = ({ setSearchBarFocused }) => {
  const { searchHandler, search, setSearch } = useSearchBarContext();
  const { signInModalOpened, setSignInModalOpened, userData } = useUserContext();

  function closeSignInModal() {
    setSignInModalOpened(false);
  }

  return (
    <header
      className="border-solid border-b-[1px] border-b-secondary-200 flex
      justify-around items-center h-[60px] fixed w-screen backdrop-filter backdrop-blur-lg"
    >
      <ModalContainer open={signInModalOpened} handleClose={closeSignInModal}>
        <SignInMain />
      </ModalContainer>
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
          setSearchBarFocused={setSearchBarFocused}
          search={search}
          setSearch={setSearch}
          debounceTimeout={1000}
        />
      </div>
      <div>
        {
          userData ?
          <p>LOGADO</p> :
          <Button
            sizes="sm"
            className=""
            onClick={() => setSignInModalOpened(true)}
          >
            SIGN-IN
          </Button>
        }
      </div>
    </header>
  )
}

export default TopBar
