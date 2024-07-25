import { useState } from 'react';
import { ChevronIcon } from '../icons/ChevronIcon';
import './Region.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { filterByRegion, setRegion } from '../../features/countriesSlice';
import { RegionType } from '../../types/Country';

const regions: RegionType[] = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
];

export const Region = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);
  const { region } = useAppSelector(state => state.countries);

  const selectRegionHandler = (reg: RegionType) => {
    dispatch(setRegion(reg));
    dispatch(filterByRegion(reg));
    setIsFilterOpen(false);
  };

  return (
    <div className="region">
      <div
        className="region__btn"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <div className="region__btn-text">{region || 'Filter by Region'}</div>
        <ChevronIcon theme={theme} />
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
