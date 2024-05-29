import { useAppSelector } from '../../app/hooks';
import { CountryCard } from '../CountryCard';
import { FilterMenu } from '../FilterMenu';
import { Loader } from '../Loader';
import './CountriesList.scss';

export const CountriesList = () => {
  const { countries, isLoading } = useAppSelector(state => state.countries);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="countries-list">
          <FilterMenu />
          <div className="countries-list__wrapper container">
            {countries.map(country => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
