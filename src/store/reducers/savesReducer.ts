import { createReducer } from 'typesafe-actions';
import { addSave, removeSaveByTime } from './../actions/savesActions';
import { Action, SavesState, SavesPayload } from './reducersTypes';

const initialState: SavesState = [];

export default createReducer<SavesState>(initialState, {
  [addSave.toString()]: (state, action: Action<SavesPayload>) => {
    const checkDouble = state.some((save) => save.id === action.payload.id);

    if (checkDouble && action.payload.isAutoSave) {
      return [...state];
    } else {
      return [...state, action.payload];
    }
  },
  [removeSaveByTime.toString()]: (state, action: Action<SavesPayload>) => {
    return [...state.filter((save) => save.time !== action.payload.time)];
  },
});
