'use client';

import React, { useState, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export default function ReduxProvider({ children }: { children: ReactNode }) {
  // create the store once on the client
  const [store] = useState(() => makeStore());

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        {children}
      </PersistGate>
    </Provider>
  );
}
