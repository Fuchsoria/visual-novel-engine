import { createAction } from 'typesafe-actions';

export const setLazyTexts = createAction('SET_LAZY_TEXTS')();
export const unsetLazyTexts = createAction('UNSET_LAZY_TEXTS')();
