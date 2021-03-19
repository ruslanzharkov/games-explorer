import React, { FC } from 'react';
import { FaGamepad } from 'react-icons/fa';

import styles from './Header.module.css';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div>
        <FaGamepad size={35} />
        <div>Games explorer</div>
      </div>
    </div>
  );
};
