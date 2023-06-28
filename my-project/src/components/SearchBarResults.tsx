"use client"

import { useSearchBarContext } from "@/contexts/SearchBarContext";
import React, { FC, HTMLAttributes } from "react";
import JobsDashboard from "./JobsDashboard";
import ModalContainer from "./ModalContainer";

export interface SearchBarResultsProps extends
  HTMLAttributes<HTMLElement> {
}


const SearchBarResults: FC<SearchBarResultsProps> = ({ }) => {
  const { searchBarData } = useSearchBarContext();

  console.log('000', searchBarData)

  return (
    <>
      {
        searchBarData &&
        <ModalContainer
          open={true}
          handleClose={() => console.log('Fechou')}
        >
          <div className="w-[50%] absolute top-[60px]">
            <JobsDashboard
              listStyle="searchBar"
              className="backdrop-filter backdrop-blur-lg border-solid border-[1px]
              border-slate-200 px-lg divide-y divide-slate-400"
            />
          </div>
        </ModalContainer>
      }
    </>
  )
}

export default SearchBarResults;
