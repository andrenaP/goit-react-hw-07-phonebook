import { useDeleteContactMutation } from 'redux/contact';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li key={id}>
      <span className="name">{name}</span>
      <span className="number">{phone}</span>
      <button
        onClick={() => {
          deleteContact(id);
        }}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

export default ContactItem;
