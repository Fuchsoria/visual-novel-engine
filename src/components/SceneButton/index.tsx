import React from 'react';
import styles from './styles.module.scss';
import { SceneButtonProps } from '../../types/types';

export default function SceneButton({ handleClick, text }: SceneButtonProps) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
}
