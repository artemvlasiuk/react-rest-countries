import { Link } from 'react-router-dom';
import './Header.scss';
import { MoonIcon } from './MoonIcon';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleTheme } from '../../features/themeSlice';
import { useEffect } from 'react';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="header__wrapper container">
        <Link to="/" className="header__logo">
          Where in the world?
        </Link>
        <button className="header__theme-switcher" onClick={toggleThemeHandler}>
          <MoonIcon theme={theme} />
          Dark Mode
        </button>
      </div>
    </header>
  );
};
