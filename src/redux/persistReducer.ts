import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistReducers = (reducers: Reducer<any>) => {
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
