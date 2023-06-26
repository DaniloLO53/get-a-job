"use client"

import { Divider } from "@mui/material";
import React, { FC, HTMLAttributes } from "react";

export interface SideBarProps extends
  HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
  setJobsData: any;
}

const SideBar: FC<SideBarProps> = ({ }) => {
  return (
    <aside
      className="bg-red-100 w-[300px]"
    >
      <div className="">
        <h3 className="m-[6px] text-[21px]">Filtros</h3>
        <Divider className="w-[100%] border-t-2 border-gray-300 my-9"/>
      </div>
    </aside>
  )
}

export default SideBar;
