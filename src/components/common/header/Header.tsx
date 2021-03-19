import React, { FC } from 'react';

import styles from './Header.module.css';
import { Input } from '../input';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerInputContainer}>
        <Input className={styles.headerInput} />
      </div>
    </div>
  );
};
