"use client"

import { Divider } from "@mui/material";
import React, { FC, HTMLAttributes } from "react";

export interface SideBarProps extends
  HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
}

const SideBar: FC<SideBarProps> = ({ }) => {
  return (
    <aside
      className="w-[350px] h-[calc(100vh-80px)] fixed right-0 bottom-[0px] border-[1px] border-solid border-gray-200 bg-white hidden md:flex -z-1"
    >
      <div className="">
        <h3 className="p-[13px] text-[21px]">Filtros</h3>
        <Divider className="w-[100%] border-t-2 border-gray-300 my-9"/>
      </div>
    </aside>
  )
}

export default SideBar;
