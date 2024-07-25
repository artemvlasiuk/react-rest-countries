/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country, RegionType } from '../types/Country';
import { fetchCountries } from '../app/api';

export interface CountriesState {
  originalCountries: Country[];
  countries: Country[];
  region: RegionType;
  isLoading: boolean;
  hasError: boolean;
}

const initialState: CountriesState = {
  originalCountries: [],
  countries: [],
  region: '',
  isLoading: false,
  hasError: false,
};

export const init = createAsyncThunk('countries/fetch', () => {
  return fetchCountries();
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    filterByRegion: (state, action: PayloadAction<string>) => {
      state.countries = state.originalCountries.filter(
        country => country.region === action.payload,
      );
    },

    searchByName: (state, action: PayloadAction<string>) => {
      state.countries = state.originalCountries.filter(country =>
        country.name.common
          .toLowerCase()
          .includes(action.payload.toLowerCase()),
      );
    },

    setRegion: (state, action: PayloadAction<RegionType>) => {
      state.region = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(init.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.originalCountries = action.payload;
      state.countries = action.payload;
      state.isLoading = false;
    });

    builder.addCase(init.rejected, state => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export const { filterByRegion, searchByName, setRegion } =
  countriesSlice.actions;
export default countriesSlice.reducer;
