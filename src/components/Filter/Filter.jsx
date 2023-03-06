import { FilterBox, FilterInput, Label } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterBox>
      <Label>
        Filter by name
        <FilterInput type="text" value={filter} onChange={onChange} />
      </Label>
    </FilterBox>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
