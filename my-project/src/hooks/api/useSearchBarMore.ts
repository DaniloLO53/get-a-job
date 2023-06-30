import useAsync from '../useAsync';

import * as jobsApi from '../../services/jobsApi';

export default function useSearchBarMore() {
  const {
    loading: searchBarMoreLoading,
    errors: searchBarMoreError,
    act: searchBarMore,
  } = useAsync(jobsApi.searchBarMore, false);

  return {
    searchBarMoreLoading,
    searchBarMoreError,
    searchBarMore,
  };
}
