"use client"

import React, { FC, HTMLAttributes } from "react";
import JobCard from "./JobCard";
import JobCardSearchBar from "./JobCardSearchBar";

export interface JobsDashboardProps extends
  HTMLAttributes<HTMLUListElement> {
  isLoading?: boolean;
  jobsData?: any;
  listStyle: "main" | "searchBar"
  className?: string;
}


const JobsDashboard: FC<JobsDashboardProps> = ({ jobsData, listStyle, className }) => {
  console.log(jobsData)
  const chooseCardType = (jobData: any, listStyle: string) => {
    switch (listStyle) {
      case "main":
        return <JobCard key={jobData.index} jobData={jobData} />;
      case "searchBar":
        return <JobCardSearchBar key={jobData.index} jobData={jobData} />;
      default:
        return;
    }
  }

  return (
    <ul className={`flex flex-col justify-center ${className || ""}`}>
      { jobsData?.jobs.map((jobData: any) => chooseCardType(jobData, listStyle)) }
    </ul>
  )
}

export default JobsDashboard;
