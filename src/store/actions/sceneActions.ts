import { createAction } from 'typesafe-actions';
import { SceneType } from './../../types/types';

export const setScene = createAction('SET_SCENE', (scene: SceneType) => ({ scene }))();
