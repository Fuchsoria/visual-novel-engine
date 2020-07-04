import { createAction } from 'typesafe-actions';
import { Save } from '../reducers/reducersTypes';

export const addSave = createAction('ADD_SAVE', (save: Save) => save)();
export const removeUserSave = createAction('REMOVE_USER_SAVE', (id: string) => ({ id }))();
export const removeAutoSave = createAction('REMOVE_AUTO_SAVE', (id: string) => ({ id }))();
