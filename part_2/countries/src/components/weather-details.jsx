import { useEffect, useState } from 'react';
import { getCityWeather, getWeatherIcon } from '../helpers/countries.helpers';

export default function WeatherDetails({ country }) {
  const [weather, setWeather] = useState(null);
  const capital = country.capital?.[0];

  useEffect(() => {
    if (!capital) {
      setWeather(null);
    } else {
      getCityWeather(capital).then((data) => {
        setWeather(data);
      });
    }
  }, [capital]);

  if (!weather || !country) {
    return null;
  }

  return (
    <div>
      <h2>{`Weather in ${capital}`}</h2>
      <p>Temperature {weather.main.temp} Celsius</p>
      <img
        src={getWeatherIcon(weather?.weather?.[0]?.icon)}
        alt={weather?.weather?.[0]?.description}
      />
      <p>Wind {weather.wind.speed} m/s</p>
    </div>
  );
}
