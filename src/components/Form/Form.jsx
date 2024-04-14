import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./Form.module.css";

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addContact(name, number));

    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <span className={css.label_span}>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleNameChange}
        />
      </label>
      <label>
        <span className={css.label_span}>Phone</span>
        <input
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}