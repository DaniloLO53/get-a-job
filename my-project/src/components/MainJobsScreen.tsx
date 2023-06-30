"use client"

import React, { FC, HTMLAttributes } from "react";

export interface MainJobsScreenProps extends
  HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
  children: any;
  searchBarFocused: any;
  jobsData: any
}

const MainJobsScreen: FC<MainJobsScreenProps> = ({ children, searchBarFocused, jobsData }) => {
  return (
    <div className={`w-full flex flex-col pt-[60px] md:pl-[15%] bg-secondary-100
    ${searchBarFocused ? "after:content-[''] after:w-screen after:h-[calc(100vh-60px)] after:fixed after:bottom-[0px] after:right-[0px]   after:animate-searchBarBackDrop" : ""}`}
    >
      <p className="p-[9px]">
        <span className="text-[18px]">{ jobsData?.jobs.length }</span> vagas de emprego
      </p>
      { children }
    </div>
  )
}

export default MainJobsScreen;
