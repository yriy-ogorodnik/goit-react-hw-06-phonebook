import PropTypes from 'prop-types';
import StyledItem from './ContactsItem.styled';
import StyledButton from 'components/ContactForm/Button.styled';

function ContactsItem({ name, number, onRemove, id }) {
  return (
    <StyledItem>
      <span>{name}:</span>
      <span>{number}</span>
      <StyledButton type="button" onClick={() => onRemove(id)}>
        Delete
      </StyledButton>
    </StyledItem>
  );
}

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactsItem;
