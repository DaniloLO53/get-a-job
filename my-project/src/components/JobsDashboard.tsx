"use client"

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
      role="list"
      className="divide-y divide-slate-200 w-full md:w-[50%]"
      >
        { jobsData?.jobs.map((jobData: any) => <JobCard key={jobData.id + "-dashboard"} jobData={jobData} />) }
      </ul>
  )
}

export default JobsDashboard;
