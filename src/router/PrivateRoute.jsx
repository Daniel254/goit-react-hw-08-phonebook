import { useAuth } from 'hooks';

import { routes } from 'constants/routes';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ element }) {
  const { isLoggedIn, isFetchingCurrentUser } = useAuth();

  if (isLoggedIn === true) {
    return element;
  } else if (isLoggedIn === false && isFetchingCurrentUser === true) {
    return null;
  } else {
    return <Navigate to={routes.LOGIN} />;
  }
}
