import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const useAuth = () => {
  const user = useSelector(authSelectors.getUser);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  return {
    user,
    isLoggedIn,
    isFetchingCurrentUser,
  };
};
