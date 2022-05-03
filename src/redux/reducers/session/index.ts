import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Section, SessionStore } from './types';

const initialState: SessionStore = { plate: '', currentSection: 'entry' };

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    changeCurrentSection: (state, action: PayloadAction<Section>) => {
      state.currentSection = action.payload;
    },
    changePlate: (state, action: PayloadAction<string>) => {
      state.plate = action.payload;
    },
  },
});

export const { changeCurrentSection, changePlate } = sessionSlice.actions;
const sessionReducer = sessionSlice.reducer;

export default sessionReducer;
