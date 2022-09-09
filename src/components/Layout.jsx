import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from 'styles/GlobalStyle';
import Box from './ui/Box';
import Container from './ui/Container';
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

        <Outlet />
      </Container>
      <ToastContainer position="top-center" hideProgressBar={true} />
    </>
  );
}
