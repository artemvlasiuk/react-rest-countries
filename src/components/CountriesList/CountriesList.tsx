import { useAppSelector } from '../../app/hooks';
import { CountryCard } from '../CountryCard';
import { FilterMenu } from '../FilterMenu';
import './CountriesList.scss';

export const CountriesList = () => {
  const { countries } = useAppSelector(state => state.countries);

  return (
    <>
      <FilterMenu />
      <div className="countries container">
        {countries.map(country => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </>
  );
};
