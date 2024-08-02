import PersonDetails from './PersonDetails';

export default function PersonList({ persons, onDelete }) {
  return (
    <ul>
      {persons?.map((person) => (
        <li key={person.id}>
          <PersonDetails person={person} onDelete={onDelete(person.id)} />
        </li>
      ))}
    </ul>
  );
}
