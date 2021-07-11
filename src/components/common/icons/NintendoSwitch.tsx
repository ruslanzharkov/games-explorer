import { FC } from 'react';
import { CommonIconProps } from '../../../types/icons';

interface NintendoSwitchIconProps extends CommonIconProps {}

export const NintendoSwitch: FC<NintendoSwitchIconProps> = ({
  width,
  height,
}) => {
  return (
    <svg viewBox='0 0 512 512' width={width} height={height}>
      <path
        d='M397 0H281v512h116c63.411 0 115-51.589 115-115V115C512 51.589 460.411 0 397 0zm-.5 332c-33.359 0-60.5-27.141-60.5-60.5s27.141-60.5 60.5-60.5 60.5 27.141 60.5 60.5-27.141 60.5-60.5 60.5z'
        fill='#d5011d'
      />
      <g fill='#ff0021'>
        <path d='M251 512H115C51.589 512 0 460.411 0 397V115C0 51.589 51.589 0 115 0h136v512zM115 30c-46.869 0-85 38.131-85 85v282c0 46.869 38.131 85 85 85h106V30H115z' />
        <path d='M125.5 211C92.141 211 65 183.859 65 150.5S92.141 90 125.5 90s60.5 27.141 60.5 60.5-27.141 60.5-60.5 60.5z' />
      </g>
    </svg>
  );
};
