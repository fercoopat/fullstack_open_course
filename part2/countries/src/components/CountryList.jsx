export default function CountryList({ countries, onClick }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
        </tr>
      </thead>
      <tbody>
        {countries?.map((country) => (
          <tr key={country?.name?.common}>
            <td>{country?.name?.common}</td>
            <td>
              <button onClick={onClick(country)}>Show details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
