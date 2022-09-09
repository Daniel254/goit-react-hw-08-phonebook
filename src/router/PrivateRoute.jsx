import { useAuth } from 'hooks';

import { Navigate } from 'react-router-dom';
import { routes } from 'router';

export default function PrivateRoute({ element }) {
  const { isLoggedIn, isFetchingCurrentUser } = useAuth();

  if (isLoggedIn === true) {
    return element;
  } else if (isLoggedIn === false && isFetchingCurrentUser === true) {
    return null;
  } else {
    return <Navigate to={routes.LOGIN} />;
  }

  // if (isLoggedIn === false &&) {
  //   return <Navigate to={routes.LOGIN} />;
  // } else if (isLoggedIn === true) {
  //   return element;
  // }
  // return null;
}
