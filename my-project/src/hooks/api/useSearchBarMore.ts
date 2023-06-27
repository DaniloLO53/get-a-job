import useAsync from '../useAsync';

import * as jobsApi from '../../services/jobsApi';

export default function useSearchBar() {
  const {
    loading: searchBarLoading,
    errors: searchBarError,
    act: searchBarMore,
  } = useAsync(jobsApi.searchBarMore, false);

  return {
    searchBarLoading,
    searchBarError,
    searchBarMore,
  };
}