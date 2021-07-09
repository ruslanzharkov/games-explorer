import React from 'react';

import { Platforms } from '../constants/platforms';
import { PlayStationIcon } from '../components/common/icons';

const width = 20;
const height = 20;

export const resolvePlatformIcon = (platform: string) => {
  switch (platform) {
    case Platforms.PlayStation5:
    case Platforms.PlayStation4:
    case Platforms.PlayStation3:
      return <PlayStationIcon width={width} height={height} />;

    default:
      break;
  }
};
