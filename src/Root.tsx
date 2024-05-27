import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { CountriesList } from './components/CountriesList';
import { DetailsPage } from './components/DetailsPage';

export const Root = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<CountriesList />} />
            <Route path="countries/:name" element={<DetailsPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
};
