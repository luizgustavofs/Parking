import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { persistStore } from 'redux-persist';

import { persistReducers } from './persistReducer';
import authReducer from './reducers/auth';
import preferencesReducer from './reducers/preferences';
import sessionReducer from './reducers/session';

const combinedReducers = combineReducers({
  auth: authReducer,
  preferences: preferencesReducer,
  session: sessionReducer,
});

export type RootReducer = ReturnType<typeof combinedReducers>;

export const store = configureStore({
  reducer: persistReducers(combinedReducers),
});

const persist = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { persist };
