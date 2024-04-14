import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const selectContacts = useSelector(({ contacts: { items } }) => items);
  const { name } = useSelector(({ filters }) => filters);

  const filteredContacts = selectContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase()) ||
      contact.number.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <ul className={css.contacts_list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}