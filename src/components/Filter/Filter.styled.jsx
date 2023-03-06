import styled from 'styled-components';

export const FilterBox = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FilterInput = styled.input`
  width: 372px;
  border-radius: 5px;
  border-color: lightblue;
  padding: 5px;

  &:focus {
    border-color: white;
  }
`;
