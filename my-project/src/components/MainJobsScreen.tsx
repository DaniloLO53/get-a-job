"use client"

import React, { FC, HTMLAttributes } from "react";

export interface MainJobsScreenProps extends
  HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
  children: any;
}

const MainJobsScreen: FC<MainJobsScreenProps> = ({ children }) => {
  return (
    <div className="flex justify-center w-[calc(100vw-350px)]">
      { children }
    </div>
  )
}

export default MainJobsScreen;
