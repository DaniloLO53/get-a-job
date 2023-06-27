"use client"

import { Divider } from "@mui/material";
import React, { FC, HTMLAttributes } from "react";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import { calculatePublishTime } from "@/lib/calculatePublishTime";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export interface JobCardProps extends
  HTMLAttributes<HTMLUListElement> {
  isLoading?: boolean;
  jobData: any;
}

const JobCard: FC<JobCardProps> = ({ jobData }) => {
  const officeIcon = (type: string) => {
    switch (type) {
      case "Presencial":
        return <EmojiTransportationOutlinedIcon />
      case "Home Office":
        return <HomeOutlinedIcon />
      default:
        return <MapsHomeWorkOutlinedIcon />
    }
  }

  
  return (
    <li
      className="flex flex-col w-[90%] p-[15px]"
    >
      <div className="text-[24px] text-500 flex items-center justify-between">
        <span>{jobData.title}</span>
        <div className="flex items-center text-gray-600 text-[14px]">
          <AccessTimeOutlinedIcon fontSize="small" />
          &nbsp;
          <span>{calculatePublishTime(new Date(jobData.updated_at))}</span>
        </div>
      </div>
      <p className="">
        {jobData.company.name.toUpperCase()}
      </p>
      <div className="flex items-center text-[12px] text-gray-600 my-[12px]">
        <span className="w-[160px]">{jobData.location}</span>
        <div className="flex items-center">
          { officeIcon(jobData.type) }
          &nbsp; &nbsp;
          <span>{jobData.type}</span>
        </div>
      </div>
      <p>{jobData.description}</p>
    </li>
  )
}

export default JobCard;
