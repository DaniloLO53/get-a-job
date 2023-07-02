import useAsync from '../useAsync';

import * as userApi from '../../services/userApi';

export default function useSignOut() {
  const {
    loading: signOutLoading,
    errors: signOutError,
    act: signOut,
  } = useAsync(userApi.signOut, false);

  return {
    signOutLoading,
    signOutError,
    signOut,
  };
}