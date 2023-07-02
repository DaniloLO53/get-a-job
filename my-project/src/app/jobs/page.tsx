"use client"

import JobsDashboard from "@/components/JobsDashboard";
import MainJobsScreen from "@/components/MainJobsScreen";
import SearchBarResults from "@/components/SearchBarResults";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import TopBarProfile from "@/components/TopBarProfile";
import { useJobsContext } from "@/contexts/JobsContext";
import { SearchBarProvider, useSearchBarContext } from "@/contexts/SearchBarContext";
import { useUserContext } from "@/contexts/UserContext";
import useJobs from "@/hooks/api/useJobs";
import useSearchBar from "@/hooks/api/useSearchBar";
import { listJobs } from "@/services/jobsApi";
import React, { useEffect, useState } from "react";

export default function Jobs() {
  const { searchBarData } = useSearchBarContext();
  const { jobsData } = useJobsContext();
  const [searchBarFocused, setSearchBarFocused] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  console.log('JOBS RENDERED', { jobsData })
  console.log('showProfile', showProfile)

  return (
    <div className="relative">
      <TopBar setSearchBarFocused={setSearchBarFocused} setShowProfile={setShowProfile}  />
      <MainJobsScreen searchBarFocused={searchBarFocused} jobsData={jobsData}>
        <JobsDashboard jobsData={jobsData} />
        <SideBar />
        { showProfile && <TopBarProfile /> }
      </MainJobsScreen>
      { searchBarData && searchBarFocused && <SearchBarResults /> }
    </div>
  )
}
