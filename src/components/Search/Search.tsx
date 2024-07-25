import { useState } from 'react';
import { SearchIcon } from '../icons/SearchIcon';
import './Search.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { searchByName } from '../../features/countriesSlice';

export const Search = () => {
  const { theme } = useAppSelector(state => state.theme);
  const [query, setQuery] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.trim();

    setQuery(event.target.value);
    dispatch(searchByName(trimmedValue));
  };

  return (
    <div className="search">
      <SearchIcon theme={theme} />
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
