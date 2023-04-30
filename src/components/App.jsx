import ContactsList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactsForm';

const App = () => {
;

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList  />
    </div>
  );
};

export default App;
