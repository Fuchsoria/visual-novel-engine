import { createReducer } from 'typesafe-actions';
import { addSave, removeSave, loadSave } from './../actions/savesActions';
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
  [removeSave.toString()]: (state, action: Action<SavesPayload>) => {
    return [...state.filter((save) => save.id !== action.payload.id)];
  },
  [loadSave.toString()]: (state) => {
    return [...state];
  },
});
