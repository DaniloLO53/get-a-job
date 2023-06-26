"use client"

import { createContext, ReactElement, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

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
  const [jobsData, setJobsData] = useLocalStorage('jobsData', {});

  return (
    <JobsContext.Provider value={{ jobsData, setJobsData }}>
      {children}
    </JobsContext.Provider>
  );
}
