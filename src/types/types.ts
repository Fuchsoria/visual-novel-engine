export type ButtonType = {
  text: string;
  redirectId: string;
};

export type TextsType = {
  text: string;
  updatedImage?: string;
};

export type SceneType = {
  image: string;
  texts: TextsType[];
  buttons: ButtonType[];
};

export type ScenePropsType = {
  scene: SceneType;
  nextScene: (id: string) => void;
};

export type SceneStateType = {
  words: string[];
  wordsInterval: number | null;
  wordsIntervalIndex: number;
  isButtonsVisible: boolean;
};

export type NovelType = {
  id: string;
  name: string;
  scenes: { [key: string]: SceneType };
};

export type NovelProps = { novel?: NovelType; scene?: SceneType; setScene: Function };

export type SceneArrowProps = {
  handleClick?: () => void;
  direction?: 'left' | 'right';
};

export type SceneTextsProps = {
  isLeftArrowActive: () => boolean;
  isRightArrowActive: () => boolean;
  words: string[];
  prevText: () => void;
  nextText: () => void;
};

export type SceneButtonProps = {
  text: string;
  handleClick: () => void;
};
