import { memo } from 'react';
import StyledItem from 'components/ContactItem/ContactsItem.styled';
import StyledList from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import StyledButton from 'components/ContactForm/Button.styled';


function ContactsList () {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  let filtered = contacts;
  if (filter !== '') {
    const normalizedFilter = filter.toLowerCase();
    filtered = contacts.filter(contact =>
      // const filtered
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <StyledList>
    {filtered.map(({ name, number, id }) => {
      return (
        <StyledItem key={id}>
          <span>{name}:</span>
          <span>{number}</span>
          <StyledButton type="button" onClick={() => handleDelete(id)}>
            Delete
          </StyledButton>
        </StyledItem>
      );
    })}
  </StyledList>
  );
};



// export default ContactsList;
export default memo(ContactsList);