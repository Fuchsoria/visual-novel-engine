import { createReducer } from 'typesafe-actions';
import { setScene, getScene } from './../actions/sceneActions';
import { Action, SceneState, ScenePayload } from './reducersTypes';

const initialState = {
  current: 'start',
};

export default createReducer<SceneState>(initialState, {
  [setScene.toString()]: (state, action: Action<ScenePayload>) => {
    return { ...state, currentScene: action.payload.id };
  },
  [getScene.toString()]: (state) => {
    return { ...state };
  },
});
