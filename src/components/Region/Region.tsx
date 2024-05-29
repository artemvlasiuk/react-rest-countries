import { useState } from 'react';
import { ChevronIconLight } from '../FilterMenu/ChevronIconLight';
import './Region.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { filterByRegion } from '../../features/countriesSlice';
import { ChevrvonIconDark } from '../FilterMenu/ChevronIconDark';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export const Region = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector(state => state.theme);

  const selectRegionHandler = (region: string) => {
    dispatch(filterByRegion(region));
    setIsFilterOpen(false);
  };

  return (
    <div className="region" data-theme={darkMode ? 'dark' : 'light'}>
      <div
        className="region__btn"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <div className="region__btn-text">Filter by Region</div>
        {darkMode ? <ChevrvonIconDark /> : <ChevronIconLight />}
      </div>
      {isFilterOpen && (
        <ul className="region-options">
          {regions.map(reg => (
            <li
              className="region-option"
              key={reg}
              onClick={() => selectRegionHandler(reg)}
            >
              {reg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
