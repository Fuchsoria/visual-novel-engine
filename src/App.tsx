import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './router';
import { initStore } from './store';
import { setNovel } from './store/actions/novelActions';
import novelData from './mocks/novel.json';
import { NovelType } from './types/types';

const { store, persistor } = initStore();
const novel: NovelType = novelData;

if (novel) {
  store.dispatch(setNovel(novel));
  
  document.title = novel.name;
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
