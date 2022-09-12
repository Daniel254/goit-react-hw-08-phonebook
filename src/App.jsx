import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'layout/Layout';
// import ContactsPage from 'pages/ContactsPage';
// import LoginPage from 'pages/LoginPage';
// import RegisterPage from 'pages/RegisterPage';

import { routes } from 'constants/routes';
import { ToastContainer } from 'react-toastify';
import { fetchCurrentUser } from 'redux/auth';
import PrivateRoute from 'router/PrivateRoute';
import PublicRoute from 'router/PublicRoute';

const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={routes.INDEX} element={<Layout />}>
            <Route index element={<Navigate to={routes.CONTACTS} />} />
            <Route
              path={routes.CONTACTS}
              element={<PrivateRoute element={<ContactsPage />} />}
            />
            <Route
              path={routes.LOGIN}
              element={<PublicRoute restricted element={<LoginPage />} />}
            />
            <Route
              path={routes.REG}
              element={<PublicRoute restricted element={<RegisterPage />} />}
            />
            <Route path="*" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" hideProgressBar={true} />
    </>
  );
}
