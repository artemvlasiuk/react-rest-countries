import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countriesSlice';
import darkMode from '../features/themeSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    theme: darkMode,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
