import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemReducer from '../features/items/itemsSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: ['items','comments'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, itemReducer);

export const store = configureStore({
  reducer: {
    items: persistedReducer,
  },
  middleware:[],
  devTools: process.env.NODE_ENV!== 'production',
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
