import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';

import ContactsList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactsForm';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('lscontacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  const getFormData = data => {
    console.log('data :>> ', data);
    const dataIncludes = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (dataIncludes) {
      return alert(`${data.name} is already in contacts`);
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const handleFilterChange = e => {
    const target = e.target.value;
    setFilter(target);
  };

  const handleDelete = id => {
    console.log('id :>> ', id);
    const filtered = contacts.filter(contact => contact.id !== id);
    setContacts(filtered);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // useEffect(() => {
  //   const contact = localStorage.getItem('lscontacts');
  //   const parse = JSON.parse(contact);
  //   if (parse) {
  //     setContacts(parse);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('lscontacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm getFormData={getFormData} />
      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <ContactsList contacts={getVisibleContacts()} onRemove={handleDelete} />
    </div>
  );
};

export default App;
