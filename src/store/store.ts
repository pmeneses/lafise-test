import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './accountSlice';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { PersistConfig, persistReducer } from 'redux-persist';
import { transferSlice } from './transfer';
import { transactionSlice } from './transaction';
import { appSlice } from './app';

const isServer = typeof window === 'undefined';

function createNoopStorage() {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
}

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage: isServer ? createNoopStorage() : createWebStorage('session'),
  whitelist: ['user', 'transaction', 'app'],
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  transfer: transferSlice.reducer,
  transaction: transactionSlice.reducer,
  app: appSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
