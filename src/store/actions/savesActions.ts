import { createAction } from 'typesafe-actions';
import { Save } from '../reducers/reducersTypes';

export const addSave = createAction('ADD_SAVE', (save: Save) => save)();
export const removeSave = createAction('REMOVE_SAVE', (id: string) => ({ id }))();
export const loadSave = createAction('LOAD_SAVE', (id: string) => ({ id }))();
