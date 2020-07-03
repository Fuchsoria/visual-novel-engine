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

export type SettingsState = {
  lazyTexts: boolean;
};

export type SettingsPayload = {};

export type Save = {
  time: number;
  id: string;
  name?: string;
};

export type Saves = Save[];

export type LoadRemoveSavePayload = {
  id: string;
}

export type LoadRemoveSaveState = {
  id: string;
}

export type SavesPayload = Save;

export type SavesState = Saves;