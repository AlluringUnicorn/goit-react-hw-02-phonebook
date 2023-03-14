import { ListItem } from './ListItem';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.length > 0 && (
        <ListItem contacts={contacts} handleDelete={handleDelete}></ListItem>
      )}
    </ul>
  );
};
