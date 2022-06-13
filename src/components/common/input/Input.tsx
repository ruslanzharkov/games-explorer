import { FC, memo } from 'react';

import styles from './Input.module.css';
import { InputTypes } from '../../../constants/input';

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: InputTypes;
}

export const Input: FC<InputProps> = memo(
  ({ className = '', placeholder, type }) => {
    const inputClassNames = [styles.input, className].join(' ');

    return (
        <input
          className={inputClassNames}
          type={type}
          placeholder={placeholder}
        />
    );
  }
);
