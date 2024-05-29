import React, { useEffect } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { init as fetchCountries } from './features/countriesSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector(state => state.theme);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App" data-theme={darkMode ? 'dark' : 'light'}>
      <Header />
      <Outlet />
    </div>
  );
};
