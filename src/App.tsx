import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './router';
import { initStore } from './store';
import { setNovel } from './store/actions/novelActions';
import novels from './mocks/testNovel';

const { store, persistor } = initStore();
const demoNovel = novels.find(({ id }) => id === 'demo');

if (demoNovel) {
  store.dispatch(setNovel(demoNovel));
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}
