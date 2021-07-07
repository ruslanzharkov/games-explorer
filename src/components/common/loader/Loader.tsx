import React, { FC } from 'react';

import styles from './Loader.module.css';

interface LoaderProps {
  containerClassName?: string;
}

export const Loader: FC<LoaderProps> = ({ containerClassName }) => {
  return (
    <div className={containerClassName}>
      <div className={styles.ldsEllipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
