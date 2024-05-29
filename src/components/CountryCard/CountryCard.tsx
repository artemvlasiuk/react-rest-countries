import { Link } from 'react-router-dom';
import { Country } from '../../types/Country';
import './CountryCard.scss';
import { useAppSelector } from '../../app/hooks';

interface CountryCardProps {
  country: Country;
}

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const { darkMode } = useAppSelector(state => state.theme);

  return (
    <Link
      to={`countries/${country.name.common}`}
      className="country"
      data-theme={darkMode ? 'dark' : 'light'}
    >
      <img
        src={country.flags.svg}
        alt="Country Flag"
        className="country__flag"
      />
      <div className="country__description">
        <h3 className="country__name">{country.name.common}</h3>
        <div className="country__summary">
          <div className="country__summary-item">
            Population: <span>{country.population.toLocaleString()}</span>
          </div>
          <div className="country__summary-item">
            Region: <span>{country.region}</span>
          </div>
          <div className="country__summary-item">
            Capital: <span>{country.capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
