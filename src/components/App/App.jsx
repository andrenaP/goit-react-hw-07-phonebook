import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Section from '../Section';
import Filter from '../Filter';

import { useSelector } from 'react-redux';
import { getContactsItems } from 'redux/contactSlice';
import { useGetContactsQuery } from 'redux/contact';

export const App = () => {
  const { data } = useGetContactsQuery();
  console.log(data);
  const contacts = useSelector(getContactsItems);

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {contacts.length !== 0 ? (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      ) : (
        'No contacts yet'
      )}
    </div>
  );
};

export default App;
