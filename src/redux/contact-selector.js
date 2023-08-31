export const getVisibleContacts = ({ data, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  if (data) {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
};
