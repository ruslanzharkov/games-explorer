import { Platforms, TransformedUniquePlatforms } from '../constants/platforms';
import { Platform } from '../types/games';
import {
  AndroidIcon,
  LinuxIcon,
  MacOsIcon,
  NintendoSwitch,
  PlayStationIcon,
  WindowsIcon,
  XboxIcon,
} from '../components/common/icons';

const width = 16;
const height = 16;

export const resolvePlatformIcon = (
  uniquePlatform: TransformedUniquePlatforms
) => {
  switch (uniquePlatform) {
    case TransformedUniquePlatforms.Android:
      return <AndroidIcon width={width} height={height} />;
    case TransformedUniquePlatforms.Linux:
      return <LinuxIcon width={width} height={height} />;
    case TransformedUniquePlatforms.MacOs:
      return <MacOsIcon width={width} height={height} />;
    case TransformedUniquePlatforms.NintendoSwitch:
      return <NintendoSwitch width={width} height={height} />;
    case TransformedUniquePlatforms.Pc:
      return <WindowsIcon width={width} height={height} />;
    case TransformedUniquePlatforms.XboxOne:
      return <XboxIcon width={width} height={height} />;
    case TransformedUniquePlatforms.PlayStation:
      return <PlayStationIcon width={width} height={height} />;
  }
};

export const createUniquePlatforms = (platforms: Platform[]) => {
  const uniquePlatforms: Set<TransformedUniquePlatforms> = new Set<TransformedUniquePlatforms>(
    platforms.map((platformDetail) => {
      switch (platformDetail.platform.slug) {
        case Platforms.PlayStation5:
        case Platforms.PlayStation4:
        case Platforms.PlayStation3:
        case Platforms.PsVita:
          return TransformedUniquePlatforms.PlayStation;

        case Platforms.XboxSeries:
        case Platforms.XboxOne:
        case Platforms.Xbox360:
        case Platforms.XboxOld:
          return TransformedUniquePlatforms.XboxOne;

        case Platforms.Pc:
          return TransformedUniquePlatforms.Pc;

        case Platforms.MacOs:
        case Platforms.Ios:
          return TransformedUniquePlatforms.MacOs;
        case Platforms.NintendoSwitch:
          return TransformedUniquePlatforms.NintendoSwitch;

        case Platforms.Android:
          return TransformedUniquePlatforms.Android;

        case Platforms.Linux:
          return TransformedUniquePlatforms.Linux;
        default:
          return TransformedUniquePlatforms.Pc;
      }
    })
  );

  return Array.from(uniquePlatforms);
};
