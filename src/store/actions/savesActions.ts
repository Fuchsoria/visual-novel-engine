import { createAction } from 'typesafe-actions';
import { Save } from '../reducers/reducersTypes';

export const addSave = createAction('ADD_SAVE', (save: Save) => save)();
export const removeSaveByTime = createAction('REMOVE_AUTO_SAVE', (time: number) => ({ time }))();