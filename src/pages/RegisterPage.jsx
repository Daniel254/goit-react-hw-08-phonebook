import RegistrationForm from 'components/RegistrationForm';
import Box from 'components/ui/Box';
import Section from 'components/ui/Section';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'router';

export default function RegisterPage() {
  return (
    <Section>
      <RegistrationForm />
      <Box py={20} textAlign={'center'}>
        Already have an account?&nbsp;
        <Link to={routes.LOGIN}>SignIn</Link>
      </Box>
    </Section>
  );
}
