export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};