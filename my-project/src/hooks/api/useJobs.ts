import useAsync from '../useAsync';

import * as jobsApi from '../../services/jobsApi';

export default function useJobs() {
  const {
    loading: listJobsLoading,
    errors: listJobsError,
    act: listJobs,
  } = useAsync(jobsApi.listJobs, false);

  return {
    listJobsLoading,
    listJobsError,
    listJobs,
  };
}