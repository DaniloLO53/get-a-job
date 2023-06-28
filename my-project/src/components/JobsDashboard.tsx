"use client"

import React, { FC, HTMLAttributes } from "react";
import JobCard from "./JobCard";
import JobCardSearchBar from "./JobCardSearchBar";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useJobsContext } from "@/contexts/JobsContext";
import { useSearchBarContext } from "@/contexts/SearchBarContext";

export interface JobsDashboardProps extends
  HTMLAttributes<HTMLUListElement> {
  isLoading?: boolean;
  listStyle: "main" | "searchBar"
  className?: string;
}


const JobsDashboard: FC<JobsDashboardProps> = ({ listStyle, className }) => {
  const { jobsData } = useJobsContext();
  const { searchHandlerMore } = useSearchBarContext();
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
    <>
      <ul
      role="list"
      className={`flex flex-col justify-center ${className || ""}`}
      >
        { jobsData?.jobs.map((jobData: any) => chooseCardType(jobData, listStyle)) }
        {
          listStyle === "searchBar" &&
          <li className="hover:bg-primary-300/20 py-2 px-3 flex justify-center text-primary-500">
            <button
              type="button"
              onClick={searchHandlerMore}
              className="w-full flex justify-center"
            >
              Próximo <NavigateNextIcon />
            </button>
          </li>
        }
      </ul>
    </>
    
  )
}

export default JobsDashboard;
