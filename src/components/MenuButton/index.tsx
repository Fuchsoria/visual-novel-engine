import React from 'react';
import styles from './styles.module.scss';
import { MenuButtonProps } from '../../types/types';

export default function MenuButton({ handleClick, text, handleRemove }: MenuButtonProps) {
  return (
    <div className={styles.container}>
      {handleRemove && (
        <div className={styles.cross} onClick={handleRemove}>
          &#10006;
        </div>
      )}
        <button className={styles.button} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}
