
import { useDispatch } from 'react-redux';
import StyledItem from './ContactsItem.styled';
import StyledButton from 'components/ContactForm/Button.styled';
import { deleteContact } from 'redux/contactSlice';

function ContactsItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const { name, number, id } = contact;

  return (
    <StyledItem>
      <span>{name}:</span>
      <span>{number}</span>
      <StyledButton type="button" onClick={() => handleDelete(id)}>
        Delete
      </StyledButton>
    </StyledItem>
  );
}



export default ContactsItem;
