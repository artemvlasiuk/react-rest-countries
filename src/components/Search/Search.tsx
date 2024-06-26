import { useState } from 'react';
import { SearchIconLight } from '../FilterMenu/SearchIconLight';
import './Search.scss';
import { useAppDispatch } from '../../app/hooks';
import { searchByName } from '../../features/countriesSlice';

export const Search = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.trim();

    setQuery(event.target.value);
    dispatch(searchByName(trimmedValue));
  };

  return (
    <div className="search">
      <SearchIconLight />
      <input
        type="text"
        name="search"
        placeholder="Search for a country…"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};
