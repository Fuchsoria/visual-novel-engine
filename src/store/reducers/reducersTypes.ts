export type Action<P> = {
  type: string;
  payload: P;
};

export type SceneState = {
  current: string;
};

export type ScenePayload = {
  id: string;
};