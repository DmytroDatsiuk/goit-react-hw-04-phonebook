import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FastField,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 373px;
  padding: 8px;
  padding-bottom: 12px;
  border: 2px solid lightblue;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Field = styled(FastField)`
  border-radius: 5px;
  border-color: lightblue;
  padding: 5px;

  &:focus {
    border-color: white;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const Button = styled.button`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  background-color: lightblue;
  border: none;
  border-radius: 4px;
  width: 150px;
  padding: 10px;

  &:hover {
    background-color: #bce8f8;
  }
  &:active {
    background-color: #93b0c7;
  }
`;
