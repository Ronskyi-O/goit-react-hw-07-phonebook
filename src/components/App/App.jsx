// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid'
import { ContactsAddForm } from 'components/ContactsAddForm/ContactsAddForm';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Container, PhonebookHeading, ContactsHeading } from './App.styled';


export function App() {
  return (
    <Container>
      <div>
        <PhonebookHeading>Phonebook</PhonebookHeading>
        <ContactsAddForm />
        <ContactsHeading>Contacs</ContactsHeading>
        <ContactsFilter />
        <ContactsList />
      </div>
    </Container>

  );
}
