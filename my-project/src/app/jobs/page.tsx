"use client"

import JobsDashboard from "@/components/JobsDashboard";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { useJobsContext } from "@/contexts/JobsContext";
import useJobs from "@/hooks/api/useJobs";
import React, { useEffect } from "react";

export default function Jobs() {
  const { listJobs, listJobsLoading } = useJobs();
  const { setJobsData, jobsData } = useJobsContext();

  useEffect(() => {
    async function getJobs() {
      const jobs = await listJobs();
      setJobsData(jobs);
    }
    getJobs();
  }, [])

  return (
    <div>
      <TopBar />
      <div
        className="flex flex-column h-[calc(100vh-60px)]"
      >
        <SideBar
          setJobsData={setJobsData}
        />
        <JobsDashboard
          jobsData={jobsData}
        />
      </div>
    </div>
  )
}
