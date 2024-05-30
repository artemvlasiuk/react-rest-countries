/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export type ThemeTypes = 'light' | 'dark';

export interface ThemeState {
  theme: ThemeTypes;
}

const initialState: ThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
