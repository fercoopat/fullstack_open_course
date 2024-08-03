import CityWeather from './CityWeather';

export default function CountryDetails({ country }) {
  const capital = country?.capital?.[0];

  const languages = Object.entries(country?.languages);

  const name = country?.name?.common;

  const area = country?.area;

  const flag = { src: country?.flags?.svg, alt: country?.flags?.alt };

  if (!country || country === null) return null;
  return (
    <article>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>
      <div>
        <strong>Languages</strong>
        <ul>
          {languages?.map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </div>
      <img
        src={flag?.svg}
        alt={flag?.alt}
        loading='lazy'
        width={100}
        height={100}
      />
      <CityWeather city={capital} />
    </article>
  );
}
