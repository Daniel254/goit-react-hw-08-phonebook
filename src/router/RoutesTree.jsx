import Layout from 'components/Layout';
import { useAuth } from 'hooks';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'router';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function RoutesTree() {
  const { isFetchingCurrentUser } = useAuth();
  if (isFetchingCurrentUser) return null;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={routes.INDEX} element={<Layout />}>
          <Route index element={<Navigate to={routes.CONTACTS} />} />
          <Route
            path="contacts"
            element={<PrivateRoute element={<ContactsPage />} />}
          />
          <Route
            path="login"
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route
            path="register"
            element={<PublicRoute restricted element={<RegisterPage />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesTree;
