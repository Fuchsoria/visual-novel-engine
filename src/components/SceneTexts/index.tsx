import React from 'react';
import SceneArrow from '../SceneArrow';
import styles from './styles.module.scss';
import { SceneTextsProps } from '../../types/types';

export default function SceneTexts({
  isLeftArrowActive,
  isRightArrowActive,
  words,
  prevText,
  nextText,
}: SceneTextsProps) {
  return (
    <div className={styles.texts}>
      {isLeftArrowActive() ? <SceneArrow handleClick={prevText} direction="left" /> : <SceneArrow />}
      <p className={styles.text}>{words.join(' ')}</p>
      {isRightArrowActive() ? <SceneArrow handleClick={nextText} direction="right" /> : <SceneArrow />}
    </div>
  );
}
