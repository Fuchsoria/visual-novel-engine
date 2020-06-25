import React from 'react';
import styles from './styles.module.scss';
import { MenuButtonProps } from '../../types/types';

export default function MenuButton({ handleClick, text }: MenuButtonProps) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
}
