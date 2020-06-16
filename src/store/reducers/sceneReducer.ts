import { createReducer } from 'typesafe-actions';
import { setScene } from './../actions/sceneActions';
import { Action, SceneState, ScenePayload } from './reducersTypes';

const initialState = {};

export default createReducer<SceneState>(initialState, {
  [setScene.toString()]: (state, action: Action<ScenePayload>) => {
    return { ...state, current: action.payload.scene };
  },
});
