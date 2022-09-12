import LoginForm from 'components/LoginForm';
import Box from 'components/ui/Box';
import Section from 'components/ui/Section';
import { routes } from 'constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <Section mt="10px">
        <LoginForm />
        <Box py={20} textAlign={'center'}>
          Don't have an account?&nbsp;
          <Link to={routes.REG}>SignUP</Link>
        </Box>
      </Section>
    </>
  );
}
