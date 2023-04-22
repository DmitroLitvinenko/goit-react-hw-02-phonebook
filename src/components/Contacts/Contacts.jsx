export const Contacts = ({ contacts, name, onInputName }) => {
  return (
    <>
      <h1>Name</h1>
      <form>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={onInputName}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </form>
      <button type="button">Add contact</button>
      <ul>
        <li>{name}</li>
      </ul>
    </>
  );
};
