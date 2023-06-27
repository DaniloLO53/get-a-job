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

const JobCardSearchBar: FC<JobCardProps> = ({ jobData }) => {
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

  console.log('TESTE')

  
  return (
    <li
      className="hover:bg-primary-100/20 py-4 px-3 first:pt-2 last:pb-2"
    >
      <p className="text-[22px] font-medium">{jobData.title}</p>
      <div className="flex items-center">
        <span className="italic">{jobData.company.name.toUpperCase()}</span>
        <span className="flex items-center justify-center text-[12px] text-gray-600">
          <span className="ml-[20px] mr-[12px]">{jobData.location}</span>
          <span className="flex items-center">
            { officeIcon(jobData.type) }
            &nbsp;
            <span>{jobData.type}</span>
          </span>
        </span>
      </div>
    </li>
  )
}

export default JobCardSearchBar;
