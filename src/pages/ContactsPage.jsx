import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import SearchContact from 'components/SearchContact';
import Box from 'components/ui/Box';
import Section from 'components/ui/Section';
import { useRedux } from 'hooks';
import React, { useEffect } from 'react';
import { getAllContacts } from 'redux/contacts';

export default function ContactsPage() {
  const { dispatch } = useRedux();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    <>
      <Section mt="10px">
        <ContactForm />
      </Section>
      <Section>
        <Box as="h2">Contacts</Box>
        <SearchContact />
        <ContactList />
      </Section>
    </>
  );
}
