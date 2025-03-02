export default function Results({ countries = [] }) {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length === 1) {
    const country = countries?.[0];

    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital?.[0]}</p>
        <p>Area {country.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.entries(country.languages).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
        <img
          className='country-flag'
          src={country.flags.svg}
          alt={country.name.common}
        />
      </div>
    );
  }

  return countries.map((country) => (
    <p key={country.cca2}>{country.name.common}</p>
  ));
}
