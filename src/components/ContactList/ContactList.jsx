import { Contact } from 'components/Contact/Contact';
import React from 'react';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      <Contact contacts={contacts} onDelete={onDelete} />
    </List>
  );
};
