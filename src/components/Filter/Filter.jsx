export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={onChangeFilter} />
      </label>
    </div>
  );
};
