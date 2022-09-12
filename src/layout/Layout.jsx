import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Box from 'components/ui/Box';
import Container from 'components/ui/Container';
import GlobalStyle from 'styles/GlobalStyle';
import UserMenu from './UserMenu';

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <UserMenu />
        <Box as="h1" mx="auto">
          Phonebook
        </Box>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <ToastContainer position="top-center" hideProgressBar={true} />
    </>
  );
}
