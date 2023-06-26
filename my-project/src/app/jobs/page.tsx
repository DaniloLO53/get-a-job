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
      <SideBar
          setJobsData={setJobsData}
      />
      <div
        className="flex w-[calc(100vw-300px)]"
      >
        <TopBar />
        <JobsDashboard
          jobsData={jobsData}
        />
      </div>
    </div>
  )
}
