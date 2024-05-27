import { Link } from 'react-router-dom';
import { Country } from '../../types/Country';
import './CountryCard.scss';

interface CountryCardProps {
  country: Country;
}

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Link to={`countries/${country.name.common}`} className="country">
      <img
        src={country.flags.svg}
        alt="Country Flag"
        className="country__flag"
      />
      <div className="country__description">
        <h3 className="country__name">{country.name.common}</h3>
        <div className="country__summary">
          <div className="country__summary-item">
            Population: <span>{country.population}</span>
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
