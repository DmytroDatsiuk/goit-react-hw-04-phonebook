import { Button, Description, Item } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Description>
            {name}: {number}
          </Description>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
