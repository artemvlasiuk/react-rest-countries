import { Link, useNavigate, useParams } from 'react-router-dom';
import './DetailsPage.scss';
import { useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { Country } from '../../types/Country';
import { BackArrowIcon } from './BackArrowIcon';

export const DetailsPage = () => {
  const { name } = useParams();
  const { countries } = useAppSelector(state => state.countries);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const navigate = useNavigate();

  const convertBorders = (borders: string[]) => {
    return borders.map(border => {
      const countryName = countries.find(cntr => cntr.cca3 === border)?.name
        .common;

      return countryName;
    });
  };

  const borders = selectedCountry?.borders
    ? convertBorders(selectedCountry.borders)
    : [];

  const currencies = selectedCountry?.currencies
    ? Object.keys(selectedCountry.currencies).join(', ')
    : [];

  const languages = selectedCountry?.languages
    ? Object.values(selectedCountry.languages).join(', ')
    : [];

  useEffect(() => {
    const foundCountry = countries.find(
      country => country.name.common === name,
    );

    if (foundCountry) {
      setSelectedCountry(foundCountry);
    }
  }, [name, countries]);

  return (
    <section className="details container">
      <button
        className="details__back-btn details__back-btn--margin-top"
        onClick={() => navigate(-1)}
      >
        <BackArrowIcon />
        Back
      </button>
      <div className="details__wrapper details__wrapper--margin-top">
        <img
          src={selectedCountry?.flags.svg}
          alt="Country flag"
          className="details__flag"
        />
        <div className="details__info">
          <h3 className="details__name">{selectedCountry?.name.common}</h3>
          <div className="details__description">
            <div className="details__description-column">
              <div className="details__description-row">
                Native Name: <span>{selectedCountry?.name.common}</span>
              </div>
              <div className="details__description-row">
                Population:{' '}
                <span>{selectedCountry?.population.toLocaleString()}</span>
              </div>
              <div className="details__description-row">
                Region: <span>{selectedCountry?.region}</span>
              </div>
              <div className="details__description-row">
                Sub Region: <span>{selectedCountry?.subregion}</span>
              </div>
              <div className="details__description-row">
                Capital: <span>{selectedCountry?.capital}</span>
              </div>
            </div>
            <div className="details__description-column">
              <div className="details__description-row">
                Top Level Domain: <span>{selectedCountry?.tld}</span>
              </div>
              <div className="details__description-row">
                Currencies: <span>{currencies}</span>
              </div>
              <div className="details__description-row">
                Languages: <span>{languages}</span>
              </div>
            </div>
          </div>
          {selectedCountry?.borders && (
            <div className="details__borders">
              Border Countries:
              <ul>
                {borders.map(country => (
                  <li className="details__border" key={country}>
                    <Link to={`/countries/${country}`}>{country}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
