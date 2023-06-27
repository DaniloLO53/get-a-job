import useAsync from '../useAsync';

import * as jobsApi from '../../services/jobsApi';

export default function useSearchBar() {
  const {
    loading: searchBarLoading,
    errors: searchBarError,
    act: searchBar,
  } = useAsync(jobsApi.searchBar, false);

  return {
    searchBarLoading,
    searchBarError,
    searchBar,
  };
}