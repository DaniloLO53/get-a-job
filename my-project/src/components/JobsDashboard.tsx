"use client"

import React, { FC, HTMLAttributes } from "react";
import JobCard from "./JobCard";
import JobCardSearchBar from "./JobCardSearchBar";
import JobCardSkeleton from "./JobCardSkeleton";

export interface JobsDashboardProps extends
  HTMLAttributes<HTMLUListElement> {
  isLoading?: boolean;
  jobsData?: any;
}


const JobsDashboard: FC<JobsDashboardProps> = ({ jobsData }) => {
  return (
    <ul className={"flex flex-col justify-center md:w-[50%] bg-white"}>
      { !jobsData.jobs.length &&  Array.from({ length: 10 }).map((_, i) => <JobCardSkeleton key={i} />)}
      { jobsData?.jobs.map((jobData: any) => <JobCard jobData={jobData} key={jobData.id + '-dashboard'} />) }
    </ul>
  )
}

export default JobsDashboard;
