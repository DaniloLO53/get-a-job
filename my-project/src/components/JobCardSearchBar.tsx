"use client"

import React, { FC, HTMLAttributes } from "react";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';

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

  return (
    <li
      className="hover:bg-primary-300/20 p-[9px]"
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
