import { useEffect, useState } from 'react';
import {
  getImgByWeather,
  getWeatherByCityName,
} from '../helpers/weather.helpers';
import Notification from './Notification';
import { showErrorMessage } from '../helpers/common.helpers';
import ConditionContainer from './ConditionContainer';

export default function CityWeather({ city }) {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [img, setImg] = useState(null);
  const [isLoadingInfo, setIsLoadingInfo] = useState(false);
  const [isLoadingIcon, setIsLoadingIcon] = useState(false);
  const [notification, setNotification] = useState(null);

  const weatherDescription = weatherInfo?.weather?.[0]?.description;
  const weatherIcon = weatherInfo?.weather?.[0]?.icon;

  useEffect(() => {
    if (!city) return;
    setIsLoadingInfo(true);
    getWeatherByCityName(city)
      .then((info) => setWeatherInfo(info))
      .catch(() => showErrorMessage('Something went wrong!', setNotification))
      .finally(() => setIsLoadingInfo(false));
  }, [city]);

  useEffect(() => {
    if (!weatherIcon) return;
    setIsLoadingIcon(true);
    getImgByWeather(weatherIcon)
      .then((img) => setImg(img))
      .catch(() => showErrorMessage('Something went wrong!', setNotification))
      .finally(() => setIsLoadingIcon(false));
  }, [weatherIcon]);

  return (
    <ConditionContainer
      isActive={isLoadingInfo}
      alternative={<p>🌦️ Loading weather info, please wait...</p>}
    >
      <section>
        <h2>Weather in {city}</h2>
        {!!notification && <Notification />}
        <p>Temperature: {weatherInfo?.main?.temp} </p>
        {isLoadingIcon ? (
          <small>{weatherDescription}</small>
        ) : (
          <img src={img} alt={weatherDescription} loading='lazy' />
        )}
        <p>Wind: {weatherInfo?.wind?.speed} m/s</p>
      </section>
    </ConditionContainer>
  );
}
