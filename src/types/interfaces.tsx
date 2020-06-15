export type ButtonType = {
  text: string;
  redirectId: string;
};

export type SceneType = {
  image: string;
  text: string;
  buttons: ButtonType[];
};

export type ScenePropsType = {
  scene: SceneType;
};
