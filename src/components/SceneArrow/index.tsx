import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { SceneArrowProps } from '../../types/types';

export default function SceneArrow({ handleClick, direction }: SceneArrowProps) {
  if (handleClick && direction) {
    return (
      <button
        onClick={handleClick}
        className={cn(styles.arrow, { [styles.prev]: direction === 'left', [styles.next]: direction === 'right' })}
      />
    );
  } else {
    return <button className={styles.arrow} />;
  }
}
