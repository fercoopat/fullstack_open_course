import { useState } from 'react';
import Filter from './components/filter';
import Results from './components/results';
import { searchCountries } from './helpers/countries.helpers';

import './app.css';

export default function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  const filteredCountries = [...countries]?.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(search.toLowerCase().trim());
  });

  const handleSearch = (e) => {
    const value = e?.target?.value;
    setSearch(value);

    if (!value) {
      setCountries([]);
    }
    searchCountries(value).then((data) => {
      setCountries(data);
    });
  };

  return (
    <>
      <Filter search={search} onSearch={handleSearch} />
      <Results countries={filteredCountries} />
    </>
  );
}
