"use client"

import { Divider } from "@mui/material";
import React, { FC, HTMLAttributes } from "react";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import { calculatePublishTime } from "@/lib/calculatePublishTime";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import {Skeleton} from "@mui/material";

export interface JobCardSkeletonProps extends
  HTMLAttributes<HTMLUListElement> {
}

const JobCardSkeleton: FC<JobCardSkeletonProps> = ({ }) => {  
  return (
    <Skeleton variant="rectangular" className="my-[5px]" height={200} />
  )
}

export default JobCardSkeleton;
