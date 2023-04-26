import PropTypes from 'prop-types';
import ContactstItem from 'components/ContactItem/ContactsItem';
import StyledList from './ContactsList.styled';

const ContactsList = ({ contacts, onRemove }) => {
  return (
    <StyledList>
      {contacts.map(contact => {
        return (
          <ContactstItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onRemove={onRemove}
          />
        );
      })}
    </StyledList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),

  onRemove: PropTypes.func.isRequired,
};

export default ContactsList;
