import { useEffect, useState } from 'react';
import ConditionContainer from './components/ConditionContainer';
import CountryDetails from './components/CountryDetails';
import CountryList from './components/CountryList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import { INFO_MESSAGE } from './constants/notification-messages';
import { showErrorMessage } from './helpers/common.helpers';
import { filterCountries, getAllCountries } from './helpers/countries.helpers';

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [countryDetails, setCountryDetails] = useState(null);

  const filteredCountries = filterCountries(countries, search);

  const showInfoNotification = filteredCountries?.length > 10 && !isLoading;

  const handleSearchChange = (e) => {
    if (filteredCountries?.length > 1) {
      setCountryDetails(null);
    }
    setSearch(e.target.value.trim().toLowerCase());
  };

  const handleShowCountryDetails = (country) => () => {
    setCountryDetails(country);
  };

  useEffect(() => {
    setIsLoading(true);
    getAllCountries()
      .then((countries) => setCountries(countries))
      .catch(() => showErrorMessage('Something went wrong!', setNotification))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (filteredCountries?.length === 1) {
      setCountryDetails(filteredCountries?.[0]);
    }
  }, [filteredCountries]);

  return (
    <div>
      <h1>Countries</h1>
      {!!notification && <Notification notification={notification} />}
      <ConditionContainer
        isActive={isLoading}
        alternative={<p>⏲️ Loading, please wait...</p>}
      >
        <Filter
          label='Find countries'
          disabled={isLoading}
          value={search}
          onChange={handleSearchChange}
        />
        <ConditionContainer
          isActive={showInfoNotification}
          alternative={
            <div style={{ marginTop: 10 }}>
              <Notification notification={INFO_MESSAGE} />
            </div>
          }
        >
          <ConditionContainer
            isActive={!!countryDetails}
            alternative={<CountryDetails country={countryDetails} />}
          >
            <CountryList
              countries={filteredCountries}
              onClick={handleShowCountryDetails}
            />
          </ConditionContainer>
        </ConditionContainer>
      </ConditionContainer>
    </div>
  );
};

export default App;
