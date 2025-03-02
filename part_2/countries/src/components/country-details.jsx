export default function CountryDetails({ country }) {
  if (!country) {
    return null;
  }
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
