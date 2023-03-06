import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 3px;
  gap: 15px;
  border-bottom: 1px solid lightblue;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Description = styled.span`
  font-size: small;
`;

export const Button = styled.button`
  font-size: small;
  background-color: lightblue;
  border: none;
  border-radius: 4px;
  padding: 4px;

  &:hover {
    background-color: #bce8f8;
  }
  &:active {
    background-color: #87aab6;
  }
`;
