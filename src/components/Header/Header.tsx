import { Link } from 'react-router-dom';
import './Header.scss';
import { MoonIconLight } from './MoonIconLight';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper container">
        <Link to="/" className="header__logo">
          Where in the world?
        </Link>
        <button className="header__theme-switcher">
          <MoonIconLight />
          Dark Mode
        </button>
      </div>
    </div>
  );
};
