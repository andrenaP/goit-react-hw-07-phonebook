import PropTypes from 'prop-types';
import './ContactList.css';
import { useSelector } from 'react-redux';

import { getfilterValue } from 'redux/filterSlice';
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contact';

const ContactList = () => {
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(getfilterValue);
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (visibleContacts.length === 0) return 'Nothing found';
  return (
    <ul className="ListOfNames">
      {visibleContacts.map(({ name, phone, id }) => {
        return (
          <li key={id}>
            <span className="name">{name}</span>
            <span className="number">{phone}</span>
            <button
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteFunc: PropTypes.func,
};
