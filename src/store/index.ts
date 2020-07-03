import { createStore, combineReducers, compose, applyMiddleware, Middleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import sceneReducer from './reducers/sceneReducer';
import novelReducer from './reducers/novelReducer';
import settingsReducer from './reducers/settingsReducer';
import savesReducer from './reducers/savesReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducer = combineReducers({
  scene: sceneReducer,
  novel: novelReducer,
  settings: settingsReducer,
  saves: savesReducer,
});

const persistConfig = {
  key: 'visual-novel',
  whitelist: ['settings', 'saves'],
  storage,
};

export function initStore(preloadedState = undefined) {
  const persistedReducer = persistReducer(persistConfig, reducer);

  const middlewares: Middleware[] = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(persistedReducer, preloadedState, composedEnhancers);
  const persistor = persistStore(store);

  return { store, persistor };
}
