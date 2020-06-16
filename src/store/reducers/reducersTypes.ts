import { SceneType, NovelType } from './../../types/types';

export type Action<P> = {
  type: string;
  payload: P;
};

export type SceneState = {
  current?: SceneType;
};

export type ScenePayload = {
  scene: SceneType;
};

export type NovelState = {
  current?: NovelType;
};

export type NovelPayload = {
  novel: NovelType;
};
