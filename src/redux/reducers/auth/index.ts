import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../../types/app/user';
import { AuthStore } from './types';

const initialState: AuthStore = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
