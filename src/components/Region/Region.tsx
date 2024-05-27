import { useState } from 'react';
import { ChevronIcon } from '../FilterMenu/ChevronIcon';
import './Region.scss';
import { useAppDispatch } from '../../app/hooks';
import { filterByRegion } from '../../features/countriesSlice';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export const Region = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const selectRegionHandler = (region: string) => {
    dispatch(filterByRegion(region));
    setIsFilterOpen(false);
  };

  return (
    <div className="region">
      <div
        className="region__btn"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <div className="region__btn-text">Filter by Region</div>
        <ChevronIcon />
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
