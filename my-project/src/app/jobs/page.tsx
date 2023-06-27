"use client"

import JobsDashboard from "@/components/JobsDashboard";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { useJobsContext } from "@/contexts/JobsContext";
import useJobs from "@/hooks/api/useJobs";
import useSearchBar from "@/hooks/api/useSearchBar";
import { searchBarMore } from "@/services/jobsApi";
import React, { useEffect, useState } from "react";

export default function Jobs() {
  const { listJobs, listJobsLoading } = useJobs();
  const { setJobsData, jobsData } = useJobsContext();
  const [jobsSearchData, setJobsSearchData] = useState(null);
  const { searchBar, searchBarLoading } = useSearchBar();
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getJobs() {
      const jobs = await listJobs();
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

  async function searchHandlerMore() {
    const response = await searchBarMore(search);
    setJobsSearchData(response);
    console.log('Query from search bar: ', response);
  }

  return (
    <div>
      <SideBar
          setJobsData={setJobsData}
      />
      <div
        className="flex justify-center w-[calc(100vw-350px)]"
      >
        <TopBar searchHandler={searchHandler} setSearch={setSearch} search={search} />
        {
          jobsSearchData &&
          <div className="w-[50%] absolute top-[60px]">
            <JobsDashboard
              jobsData={jobsSearchData}
              searchHandlerMore={searchHandlerMore}
              listStyle="searchBar"
              className="backdrop-filter backdrop-blur-lg border-solid border-[1px]
              border-slate-200 px-lg divide-y divide-slate-400"
            />
          </div>
        }
        <JobsDashboard
          jobsData={jobsData}
          listStyle="main"
          className="mt-[60px] divide-y divide-slate-200"
        />
      </div>
    </div>
  )
}
