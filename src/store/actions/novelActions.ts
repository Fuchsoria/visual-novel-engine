import { NovelType } from './../../types/types';
import { createAction } from 'typesafe-actions';

export const setNovel = createAction('SET_NOVEL', (novel: NovelType) => ({ novel }))();
