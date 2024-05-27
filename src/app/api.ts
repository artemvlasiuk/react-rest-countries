import { Country } from '../types/Country';

export const BASE_URL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  return data.map((country: any): Country => {
    const {
      borders,
      capital,
      currencies,
      name,
      region,
      subregion,
      languages,
      area,
      population,
      flags,
      tld,
      cca3,
    } = country;

    return {
      borders,
      capital,
      currencies,
      name,
      region,
      subregion,
      languages,
      area,
      population,
      flags,
      tld,
      cca3,
    };
  });
};
