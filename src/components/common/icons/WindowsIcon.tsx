import { FC } from 'react';
import { CommonIconProps } from '../../../types/icons';

interface WindowsIconProps extends CommonIconProps {}

export const WindowsIcon: FC<WindowsIconProps> = ({ width, height }) => {
  return (
    <svg viewBox='0 0 512 512' width={width} height={height}>
      <g fill='#ffffff'>
        <path d='M224 240V52L0 80v160zM256 240h256V16L256 48zM256 272v192l256 32V272zM224 272H0v160l224 28z' />
      </g>
    </svg>
  );
};
