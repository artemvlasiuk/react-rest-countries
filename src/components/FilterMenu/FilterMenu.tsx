import { Region } from '../Region';
import { Search } from '../Search';
import './FilterMenu.scss';

export const FilterMenu = () => {
  return (
    <div className="filter-menu filter-menu--margin-top container">
      <Search />
      <Region />
    </div>
  );
};
