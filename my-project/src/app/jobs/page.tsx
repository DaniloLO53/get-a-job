"use client"

import JobsDashboard from "@/components/JobsDashboard";
import MainJobsScreen from "@/components/MainJobsScreen";
import SearchBarResults from "@/components/SearchBarResults";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { useJobsContext } from "@/contexts/JobsContext";
import { SearchBarProvider, useSearchBarContext } from "@/contexts/SearchBarContext";
import { useUserContext } from "@/contexts/UserContext";
import useJobs from "@/hooks/api/useJobs";
import useSearchBar from "@/hooks/api/useSearchBar";
import { listJobs } from "@/services/jobsApi";
import React, { useEffect, useState } from "react";

export default function Jobs() {
  const { searchBarData } = useSearchBarContext();
  const { loadProfile } = useUserContext();
  const [jobsData, setJobsData] = useState(null);
  const [searchBarFocused, setSearchBarFocused] = useState(null);

  useEffect(() => {
    async function getJobs() {
      const jobs = await listJobs();
      loadProfile();
      setJobsData(jobs);
    }
    getJobs();
  }, [])

  return (
    <div className="relative">
      <TopBar setSearchBarFocused={setSearchBarFocused} />
      <MainJobsScreen searchBarFocused={searchBarFocused} jobsData={jobsData}>
        <JobsDashboard jobsData={jobsData} />
        <SideBar />
      </MainJobsScreen>
      { searchBarData && searchBarFocused && <SearchBarResults /> }
    </div>
  )
}
