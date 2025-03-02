export default function Persons({ persons }) {
  return (
    <>
      <h2>Numbers</h2>
      {persons?.map((person, index) => (
        <p key={index}>
          {person?.name} {person?.number}
        </p>
      ))}
    </>
  );
}
