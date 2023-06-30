"use client"

import JobsDashboard from "@/components/JobsDashboard";
import SearchBarResults from "@/components/SearchBarResults";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { useJobsContext } from "@/contexts/JobsContext";
import { SearchBarProvider, useSearchBarContext } from "@/contexts/SearchBarContext";
import useJobs from "@/hooks/api/useJobs";
import useSearchBar from "@/hooks/api/useSearchBar";
import { listJobs } from "@/services/jobsApi";
import React, { useEffect, useState } from "react";

export default function Jobs() {
  const { searchBarData } = useSearchBarContext();
  const [jobsData, setJobsData] = useState(null);
  const [searchBarFocused, setSearchBarFocused] = useState(null);

  useEffect(() => {
    async function getJobs() {
      const jobs = await listJobs();
      setJobsData(jobs);
    }
    getJobs();
  }, [])

  return (
    <div className="relative">
      <TopBar setSearchBarFocused={setSearchBarFocused} />
      <div
        className={`w-full flex pt-[60px] md:pl-[15%]
        ${searchBarFocused ? "after:content-[''] after:w-screen after:h-[calc(100vh-60px)] after:fixed after:bottom-[0px] after:right-[0px]   after:animate-searchBarBackDrop" : ""}`}
      >
        <JobsDashboard
          jobsData={jobsData}
        />
        <SideBar />
      </div>
      { searchBarData && searchBarFocused && <SearchBarResults /> }
    </div>
  )
}
