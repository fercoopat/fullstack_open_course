export default function PersonForm({
  newName,
  newNumber,
  onChangeName,
  onChangeNumber,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
    >
      <div>
        Name: <input value={newName} onChange={onChangeName} />
      </div>
      <div>
        Number: <input value={newNumber} onChange={onChangeNumber} />
      </div>
      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
}
