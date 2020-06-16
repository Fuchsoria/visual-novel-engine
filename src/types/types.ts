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
  nextScene: (id: string) => void;
};

export type NovelType = {
  id: string;
  name: string;
  scenes: { [key: string]: SceneType };
};

export type NovelProps = { novel?: NovelType; scene?: SceneType; setScene: Function };
