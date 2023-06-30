import useAsync from '../useAsync';

import * as userApi from '../../services/userApi';

export default function useGetProfile() {
  const {
    loading: getProfileLoading,
    errors: getProfileError,
    act: getProfile,
  } = useAsync(userApi.getProfile, false);

  return {
    getProfileLoading,
    getProfileError,
    getProfile,
  };
}