import React, { FC } from 'react';
import { FaGamepad } from 'react-icons/fa';

import styles from './Loader.module.css';

interface LoaderProps {
  containerClassName?: string;
}

export const Loader: FC<LoaderProps> = ({ containerClassName }) => {
  return (
    <div className={containerClassName}>
      <FaGamepad className={styles.loader} size={55} />
    </div>
  );
};
