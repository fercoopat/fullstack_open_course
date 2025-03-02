import { useState } from 'react';
import Filter from './components/filter';
import Results from './components/results';
import { getOneCountry, searchCountries } from './helpers/countries.helpers';

import './app.css';

export default function App() {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState(null);
  const [countries, setCountries] = useState([]);

  const filteredCountries = [...countries]?.filter((country) => {
    if (!countries?.length) {
      return [];
    }
    return country.name.common
      .toLowerCase()
      .includes(search.toLowerCase().trim());
  });

  const handleSearch = (e) => {
    const value = e?.target?.value;
    setSearch(value);

    if (!value) {
      setCountries([]);
    } else {
      searchCountries(value)
        .then((data) => {
          setCountries(data);
        })
        .finally(() => {
          setCountry(null);
        });
    }
  };

  const handleShowDetails = (countryName) => () => {
    if (!search) {
      setCountry(null);
    } else {
      getOneCountry(countryName)
        .then((data) => {
          setCountry(data);
        })
        .finally(() => {
          setCountries([]);
        });
    }
  };

  return (
    <>
      <Filter search={search} onSearch={handleSearch} />
      <Results
        country={country}
        countries={filteredCountries}
        onShowDetails={handleShowDetails}
      />
    </>
  );
}
