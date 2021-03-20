import React, { FC, useMemo } from 'react';

import styles from './Input.module.css';

interface InputProps {
  className?: string;
}

export const Input: FC<InputProps> = ({ className = '' }) => {
  const inputClassNames = useMemo(() => [styles.input, className].join(' '), [
    className,
  ]);
  return (
    <div>
      <input className={inputClassNames} type='text' />
    </div>
  );
};
