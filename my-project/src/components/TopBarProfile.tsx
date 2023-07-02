"use client"

import React, { FC, HTMLAttributes, useState } from "react";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import { useUserContext } from "@/contexts/UserContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from "./ui/Button";

export interface TopBarProfileProps extends
  HTMLAttributes<HTMLUListElement> {
}

const TopBarProfile: FC<TopBarProfileProps> = ({ }) => {
  const { userData } = useUserContext();

  console.log('TOP BAR PROFILE RENDERED')

  return (
        <ul
          role="list"
          className="flex flex-col justify-center fixed top-[60px] right-[10px] bg-secondary-200 rounded-[7px] border-[1px] border-solid w-[200px]"
        >
          <li className="">
            <Button variant="list" sizes="sm">
              Applications
            </Button>
          </li>
          <li className="">
            <Button variant="list" sizes="sm">
              Profile
            </Button>
          </li>
          <li className="">
            <Button variant="list" sizes="sm">
              Logout
            </Button>
          </li>
        </ul>
  )
}

export default TopBarProfile;
