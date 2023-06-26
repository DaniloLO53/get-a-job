"use client"

import { Divider } from "@mui/material";
import React, { FC, HTMLAttributes } from "react";

export interface JobCardProps extends
  HTMLAttributes<HTMLUListElement> {
  isLoading?: boolean;
  jobData: any;
}

const JobCard: FC<JobCardProps> = ({ jobData }) => {
  console.log('Title: ', jobData.title)
  return (
    <li
      className="flex flex-col w-[90%] border-b-solid border-b-rounded border-b-[1px] border-b-secondary-100 p-[15px]"
    >
      <h3>{jobData.title}</h3>
      <h4>{jobData.type}</h4>
      <p>{jobData.description}</p>
    </li>
  )
}

export default JobCard;
