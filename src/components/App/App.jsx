import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Section from '../Section';
import Filter from '../Filter';
export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default App;
