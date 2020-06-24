import React, { useState, useEffect, useCallback } from 'react';
import { ScenePropsType } from '../../types/types';
import SceneTexts from '../SceneTexts';
import SceneButton from '../SceneButton';
import styles from './styles.module.scss';

let wordsInterval: number;
let wordsIntervalIndex: number = 0;

export default function Scene({ scene, nextScene }: ScenePropsType) {
  const [words, setWords] = useState(['']);
  const [isButtonsVisible, setButtonsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const { image, texts, buttons } = scene;
  const handleClick = (id: string) => () => {
    clearScene();
    nextScene(id);
  };

  const lazyWords = useCallback(() => {
    console.log(texts);
    const splitedText = texts[textIndex].text.split(' ');
    console.log(splitedText);

    wordsInterval = window.setInterval(() => {
      setWords((words) => [...words, splitedText[wordsIntervalIndex]]);
      wordsIntervalIndex++;

      if (wordsIntervalIndex >= splitedText.length) {
        clearInterval(wordsInterval);
        if (textIndex === texts.length - 1) {
          setButtonsVisible(true);
        }
      }
    }, 100);
  }, [texts, textIndex]);

  const clearWords = () => {
    clearInterval(wordsInterval);
    wordsIntervalIndex = 0;
    setWords([]);
  };

  const clearScene = () => {
    setButtonsVisible(false);
    setTextIndex(0);
    clearWords();
  };

  const prevText = () => {
    if (textIndex - 1 >= 0) {
      setTextIndex((textIndex) => (textIndex -= 1));
    }
  };

  const nextText = () => {
    if (textIndex + 1 < texts.length - 1) {
      setTextIndex((textIndex) => (textIndex += 1));
    } else if (textIndex + 1 === texts.length - 1) {
      setTextIndex((textIndex) => (textIndex += 1));
      setButtonsVisible(true);
    }
  };

  const isLeftArrowActive = () => {
    return textIndex > 0;
  };

  const isRightArrowActive = () => {
    return textIndex < texts.length - 1;
  };

  useEffect(() => {
    lazyWords();

    return () => {
      clearWords();
    };
  }, [lazyWords]);

  return (
    <div className={styles.background} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.content}>
        <div className={styles.buttons}>
          {isButtonsVisible &&
            buttons.map((button) => (
              <SceneButton
                key={`${button.text}${button.redirectId}`}
                handleClick={handleClick(button.redirectId)}
                text={button.text}
              />
            ))}
        </div>
        {texts.length > 0 && (
          <SceneTexts
            isLeftArrowActive={isLeftArrowActive}
            isRightArrowActive={isRightArrowActive}
            words={words}
            prevText={prevText}
            nextText={nextText}
          />
        )}
      </div>
    </div>
  );
}
