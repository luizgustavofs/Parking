import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Language } from '@src/types/app/preferences';

import { PreferencesStore } from './types';

const initialState: PreferencesStore = { language: 'pt-br' };

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = preferencesSlice.actions;
const preferencesReducer = preferencesSlice.reducer;

export default preferencesReducer;
