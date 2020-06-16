import { createReducer } from 'typesafe-actions';
import { setNovel } from './../actions/novelActions';
import { Action, NovelState, NovelPayload } from './reducersTypes';

const initialState = {};

export default createReducer<NovelState>(initialState, {
  [setNovel.toString()]: (state, action: Action<NovelPayload>) => {
    return { ...state, current: action.payload.novel };
  },
});
