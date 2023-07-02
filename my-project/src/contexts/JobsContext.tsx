"use client"

import useGetProfile from '@/hooks/api/useGetProfile';
import useJobs from '@/hooks/api/useJobs';
import { createContext, MutableRefObject, ReactElement, useContext, useEffect, useRef, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useUserContext } from './UserContext';

interface IJobsContext {
  jobsData: any;
  setJobsData: any;
}

const JobsContext = createContext<IJobsContext | null>(null);

export function useJobsContext(): IJobsContext {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error('useJobsContext must be used within a JobsProvider');
  }
  return context;
}


export function JobsProvider({ children }: any): ReactElement {
  const [jobsData, setJobsData] = useState({ jobs: [] });
  const { userData, loadProfile } = useUserContext();
  const  { listJobs, listJobsLoading } = useJobs();
  const  { getProfile, getProfileLoading } = useGetProfile();
  const didInit = useRef<boolean>(false);

  async function getJobs() {
      const jobs = await listJobs();
      console.log('getJobs in JobsProvider useEffect', {jobs})
      setJobsData(jobs);
  }


  useEffect(() => {
    if (!(didInit as MutableRefObject<boolean>).current) {
      (didInit as MutableRefObject<boolean>).current = true;
      loadProfile();
      getJobs();
    }
  }, []);

  console.log('JOBS CONTEXT RENDERED', {
    listJobsLoading,
    getProfileLoading,
    userData
  });

  if (getProfileLoading || listJobsLoading) {
    console.log('LOADING', {
      listJobsLoading,
      getProfileLoading
    });
    return <p>LOADING...</p>
  }

  return (
    <JobsContext.Provider value={{ jobsData, setJobsData }}>
      {!!userData && children}
    </JobsContext.Provider>
  );
}
