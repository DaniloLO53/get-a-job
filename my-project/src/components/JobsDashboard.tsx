"use client"

import { Divider } from "@mui/material";
import React, { FC, HTMLAttributes } from "react";
import JobCard from "./JobCard";

export interface JobsDashboardProps extends
  HTMLAttributes<HTMLUListElement> {
  isLoading?: boolean;
  jobsData?: any;
}


const JobsDashboard: FC<JobsDashboardProps> = ({ jobsData }) => {
  console.log(jobsData)
  return (
    <ul
      className="flex flex-col items-center mt-[60px]"
    >
      {
        jobsData?.jobs.map((jobData: any) => {
          return (
            <JobCard
              key={jobData.index}
              jobData={jobData}
            />
          );
        })
      }
    </ul>
  )
}

export default JobsDashboard;
