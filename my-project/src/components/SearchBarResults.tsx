"use client"

import React, { FC, HTMLAttributes } from "react";
import JobCardSearchBar from "./JobCardSearchBar";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export interface SearchBarResultsProps extends
  HTMLAttributes<HTMLUListElement> {
  isLoading?: boolean;
  jobsData?: any;
  searchHandlerMore?: any;
  clickRef: any;
}


const SearchBarResults: FC<SearchBarResultsProps> = ({ jobsData, searchHandlerMore, clickRef }) => {
  console.log(jobsData)

  return (
      <>
        <ul
          role="list"
          className="flex flex-col justify-center w-[50%] fixed top-[60px] border-solid border-[1px] border-slate-200 px-lg divide-y
          divide-slate-400 w-full md:w-[50%] top-[60px] left-[50%] translate-x-[-50%] bg-white"
        >
          { jobsData?.jobs.map((jobData: any) => <JobCardSearchBar key={jobData.id + "-searchbar"} jobData={jobData} />) }
          <li className="hover:bg-primary-300/20 py-2 px-3 flex justify-center text-primary-500">
            <button
              id="nextButton"
              type="button"
              onClick={() => {
                console.log('clickReffff', clickRef)
                searchHandlerMore()
              }}
              className="w-full flex justify-center"
            >
              Próximo <NavigateNextIcon />
            </button>
          </li>
        </ul>
      </>
  )
}

export default SearchBarResults;
