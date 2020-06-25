import { createReducer } from 'typesafe-actions';
import { setLazyTexts, unsetLazyTexts } from './../actions/settingsActions';
import { Action, SettingsState, SettingsPayload } from './reducersTypes';

const initialState = {
  lazyTexts: true,
};

export default createReducer<SettingsState>(initialState, {
  [setLazyTexts.toString()]: (state, action: Action<SettingsPayload>) => {
    return { ...state, lazyTexts: true };
  },
  [unsetLazyTexts.toString()]: (state, action: Action<SettingsPayload>) => {
    return { ...state, lazyTexts: false };
  },
});
