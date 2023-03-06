import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  FormField,
  ErrorMessage,
  Field,
  Button,
} from './ContactForm.styled';
import PropTypes from 'prop-types';

const Schema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long')
    .required('Required'),
  number: Yup.string()
    .min(10, 'Too Short')
    .max(14, 'Too Long')
    .required('Required'),
});

export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Schema}
      onSubmit={(values, { resetForm }) => {
        if (
          onSave({
            ...values,
            id: nanoid(),
          })
        ) {
          resetForm();
        }
      }}
    >
      <Form autoComplete="off">
        <FormField htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Jacob Blanc"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="+380939998877"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
