"use client"

import React, { FC, HTMLAttributes } from "react";
import JobCard from "./JobCard";
import JobCardSearchBar from "./JobCardSearchBar";

export interface JobsDashboardProps extends
  HTMLAttributes<HTMLUListElement> {
  isLoading?: boolean;
  jobsData?: any;
}


const JobsDashboard: FC<JobsDashboardProps> = ({ jobsData }) => {
  console.log(jobsData)

  return (
    <ul className={"flex flex-col justify-center md:w-[50%]"}>
      { jobsData?.jobs.map((jobData: any) => <JobCard jobData={jobData} key={jobData.id + '-dashboard'} />) }
    </ul>
  )
}

export default JobsDashboard;
