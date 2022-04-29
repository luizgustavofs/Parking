import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

import authReducer from './reducers/auth';
import preferencesReducer from './reducers/preferences';

export const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    preferences: preferencesReducer,
  }),
});

type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
