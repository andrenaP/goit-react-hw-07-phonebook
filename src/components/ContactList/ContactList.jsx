import PropTypes from 'prop-types';
import './ContactList.css';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';

import { getfilterValue } from 'redux/filterSlice';
import { useFetchContactsQuery } from 'redux/contact';
import { getVisibleContacts } from 'redux/contact-selector';

const ContactList = () => {
  const { data, isFetching, error } = useFetchContactsQuery();

  const filter = useSelector(getfilterValue);
  const visibleContacts = getVisibleContacts({ filter, data });
  return (
    <>
      {isFetching ? 'Loading...' : 'Contacts table'}
      <ul className="ListOfNames">
        {error}

        {data && (
          <>
            {visibleContacts.length === 0 && 'Nothing found'}
            {visibleContacts.map(contacts => {
              return <ContactItem key={contacts.id} {...contacts} />;
            })}
          </>
        )}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteFunc: PropTypes.func,
};
