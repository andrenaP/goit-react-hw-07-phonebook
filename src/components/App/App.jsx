import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Section from '../Section';
import Filter from '../Filter';

import { useFetchContactsQuery } from 'redux/contact';

export const App = () => {
  const { data } = useFetchContactsQuery();

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {data ? (
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
