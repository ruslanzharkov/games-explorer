import React, { FC } from 'react';

import { Input } from '../input';
import styles from './Header.module.css';
import { InputTypes } from '../../../constants/input';

const inputStyles = styles.headerInput;

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerInputContainer}>
        <Input
          className={inputStyles}
          placeholder='Search ...'
          type={InputTypes.text}
        />
      </div>
    </div>
  );
};
