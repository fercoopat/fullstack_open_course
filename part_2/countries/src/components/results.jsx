import CountryDetails from './country-details';

export default function Results({ country, countries = [], onShowDetails }) {
  if (country) {
    return <CountryDetails country={country} />;
  }

  if (!countries.length) {
    return null;
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length === 1) {
    return <CountryDetails country={countries?.[0]} />;
  }

  return (
    <table>
      <tbody>
        {countries.map((country) => (
          <tr key={country.cca2}>
            <td>{country.name.common}</td>
            <td>
              <button onClick={onShowDetails(country.name.common)}>Show</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
