import React, { useEffect } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { init as fetchCountries } from './features/countriesSlice';
import { useAppDispatch } from './app/hooks';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
