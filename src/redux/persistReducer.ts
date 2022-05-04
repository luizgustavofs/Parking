import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { RootReducer } from './store';

const persistReducers = (reducers: Reducer<RootReducer>) => {
  const persistedReducer = persistReducer(
    {
      key: 'Parking',
      storage,
      whitelist: ['auth', 'session'],
    },
    reducers,
  );

  return persistedReducer;
};

export { persistReducers };
