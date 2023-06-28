"use client"

import JobsDashboard from "@/components/JobsDashboard";
import SearchBarResults from "@/components/SearchBarResults";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { useJobsContext } from "@/contexts/JobsContext";
import { SearchBarProvider } from "@/contexts/SearchBarContext";
import useJobs from "@/hooks/api/useJobs";
import React, { useEffect } from "react";
import { DebounceInput } from "react-debounce-input";

export default function Jobs() {
  const { listJobs, listJobsLoading } = useJobs();
  const { setJobsData } = useJobsContext();

  useEffect(() => {
    async function getJobs() {
      const jobs = await listJobs();
      console.log('+++', jobs)
      setJobsData(jobs);
    }
    getJobs();
  }, [])

  return (
    <>
      <SideBar />
      <div className="flex justify-center w-[calc(100vw-350px)]">
        <DebounceInput />
        <SearchBarProvider>
          <TopBar />
          <SearchBarResults />
          <JobsDashboard
            listStyle="main"
            className="mt-[60px] divide-y divide-slate-200"
          />
        </SearchBarProvider>
      </div>
    </>
  )
}
