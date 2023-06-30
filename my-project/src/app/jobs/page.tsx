"use client"

import JobsDashboard from "@/components/JobsDashboard";
import SearchBarResults from "@/components/SearchBarResults";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { useJobsContext } from "@/contexts/JobsContext";
import { SearchBarProvider } from "@/contexts/SearchBarContext";
import useJobs from "@/hooks/api/useJobs";
import useSearchBar from "@/hooks/api/useSearchBar";
<<<<<<< HEAD
import { searchBarMore } from "@/services/jobsApi";
import React, { useEffect, useRef, useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> parent of be32be5 (feat: search bar pagination)

export default function Jobs() {
  const [jobsSearchData, setJobsSearchData] = useState(null);
<<<<<<< HEAD
  const [search, setSearch] = useState("");
  const { setJobsData, jobsData } = useJobsContext();
  const { listJobs, listJobsLoading } = useJobs();
  const { searchBar, searchBarLoading } = useSearchBar();
  const [searchBarFocused, setSearchBarFocused] = useState(false);
  const inputRef = useRef(null);
  const clickRef = useRef(null);
=======
  const { searchBar, searchBarLoading } = useSearchBar();
>>>>>>> parent of be32be5 (feat: search bar pagination)

  useEffect(() => {
    async function getJobs() {
      const jobs = await listJobs();
      console.log('+++', jobs)
      setJobsData(jobs);
    }
    getJobs();
  }, [])

  async function searchHandler({ target }: any) {
    if (target.value.length !== 0) {
      const response = await searchBar(target.value);
      setJobsSearchData(response);
      console.log('Query from search bar: ', response);
    } else {
      setJobsSearchData(null);
    }
  }

<<<<<<< HEAD
  async function searchHandlerMore() {
    console.log('SEARCH: ', search)
    const response = await searchBarMore(search);
    setJobsSearchData(response);
    console.log('Query from search bar: ', response);
  }

=======
>>>>>>> parent of be32be5 (feat: search bar pagination)
  return (
    <div className="relative">
      <TopBar searchHandler={searchHandler} setSearch={setSearch} search={search} setSearchBarFocused={setSearchBarFocused} inputRef={inputRef} clickRef={clickRef} />
      <div
        className={`w-full flex pt-[60px] md:pl-[10%]
        ${searchBarFocused ? "after:content-[''] after:w-screen after:h-[calc(100vh-60px)] after:fixed after:bottom-[0px] after:right-[0px]   after:animate-searchBarBackDrop" : ""}`}
      >
<<<<<<< HEAD
        <JobsDashboard
          jobsData={jobsData}
        />
        <SideBar
          setJobsData={setJobsData}
=======
        <TopBar searchHandler={searchHandler} />
        {
          jobsSearchData &&
          <div className="w-[50%] absolute top-[60px]">
            <JobsDashboard jobsData={jobsSearchData} listStyle="searchBar" className="backdrop-filter backdrop-blur-lg border-solid border-[1px] border-gray-[200px] px-[12px] py-[5px]" />
          </div>
        }
        <JobsDashboard
          jobsData={jobsData}
          listStyle="main"
          className="mt-[60px]"
>>>>>>> parent of be32be5 (feat: search bar pagination)
        />
      </div>
      {
        jobsSearchData && searchBarFocused &&
        <SearchBarResults
          jobsData={jobsSearchData}
          searchHandlerMore={searchHandlerMore}
          clickRef={clickRef}
        />
      }
    </div>
  )
}
