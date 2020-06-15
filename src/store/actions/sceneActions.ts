import { createAction } from 'typesafe-actions';

export const setScene = createAction('SET_SCENE', ({ id }: { id: string }) => ({ id }))();
export const getScene = createAction('GET_SCENE')();
