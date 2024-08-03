import countriesService from '../services/countries.service';

export async function getCountriesByName(name) {
  return countriesService.getOneByName(name);
}

export async function getAllCountries() {
  return countriesService.getAll();
}

export function filterCountries(countries, search) {
  return [...countries]?.filter((country) =>
    country?.name?.common?.toLowerCase().includes(search.trim().toLowerCase())
  );
}
