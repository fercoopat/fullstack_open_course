import weatherService from '../services/weather.service';

export async function getWeatherByCityName(name) {
  const { data } = await weatherService.getWeatherByCity(name);
  return data;
}

export async function getImgByWeather(icon) {
  const { data } = await weatherService.getImgByWeather(icon);
  return data;
}
