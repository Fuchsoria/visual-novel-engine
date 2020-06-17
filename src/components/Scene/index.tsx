import React, { useState, useEffect, useCallback } from 'react';
import { ScenePropsType } from '../../types/types';
import styles from './styles.module.scss';

let wordsInterval: number;
let wordsIntervalIndex: number = 0;

export default function Scene({ scene, nextScene }: ScenePropsType) {
  const [words, setWords] = useState(['']);
  const [isButtonsVisible, setButtonsVisible] = useState(false);
  const { image, text, buttons } = scene;
  const handleClick = (id: string) => () => {
    clearScene();
    nextScene(id);
  };

  const lazyWords = useCallback(() => {
    const splitedText = text.split(' ');

    wordsInterval = window.setInterval(() => {
      setWords((words) => [...words, splitedText[wordsIntervalIndex]]);
      wordsIntervalIndex++;

      if (wordsIntervalIndex >= splitedText.length) {
        clearInterval(wordsInterval);
        setButtonsVisible(true);
      }
    }, 100);
  }, [text]);

  const clearScene = () => {
    setButtonsVisible(false);
    clearInterval(wordsInterval);
    wordsIntervalIndex = 0;
    setWords([]);
  };

  useEffect(() => {
    lazyWords();
  }, [lazyWords, text]);

  return (
    <div className={styles.background} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.content}>
        <div className={styles.buttons}>
          {isButtonsVisible &&
            buttons.map((button) => (
              <button className={styles.button} key={`${button.text}${button.redirectId}`} onClick={handleClick(button.redirectId)}>
                {button.text}
              </button>
            ))}
        </div>
        <p className={styles.text}>{words.join(' ')}</p>
      </div>
    </div>
  );
}
