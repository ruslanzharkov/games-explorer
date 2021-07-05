import React, { FC, memo } from 'react';

import styles from './Input.module.css';
import { InputTypes } from '../../../constants/input';

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: InputTypes;
}

export const Input: FC<InputProps> = memo((props) => {
  const { className = '', placeholder, type } = props;
  const inputClassNames = [styles.input, className].join(' ');

  return (
    <div>
      <input
        className={inputClassNames}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
});
