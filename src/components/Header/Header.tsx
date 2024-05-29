import { Link } from 'react-router-dom';
import './Header.scss';
import { MoonIconLight } from './MoonIconLight';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleDarkMode } from '../../features/themeSlice';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector(state => state.theme);

  const handleThemeSwitch = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="header" data-theme={darkMode ? 'dark' : 'light'}>
      <div className="header__wrapper container">
        <Link to="/" className="header__logo">
          Where in the world?
        </Link>
        <button className="header__theme-switcher" onClick={handleThemeSwitch}>
          <MoonIconLight />
          Dark Mode
        </button>
      </div>
    </div>
  );
};
