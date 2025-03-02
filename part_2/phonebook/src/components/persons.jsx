export default function Persons({ persons, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <td>
            <h2>Numbers</h2>
          </td>
        </tr>
      </thead>
      <tbody>
        {persons?.map((person) => (
          <tr key={person.id}>
            <td>{person?.name}</td>
            <td>{person?.number}</td>
            <td>
              <button onClick={onDelete(person)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
