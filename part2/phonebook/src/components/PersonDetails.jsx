export default function PersonDetails({ person, onDelete }) {
  return (
    <p style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      {person.name} {person.number} <button onClick={onDelete}>Delete</button>
    </p>
  );
}
