import { FC, memo } from 'react';
import { IGame } from '../../types/games';

import styles from './Card.module.css';
import {
  createUniquePlatforms,
  resolvePlatformIcon,
} from '../../utils/platform';

interface CardProps {
  game: IGame;
}

export const Card: FC<CardProps> = memo((props) => {
  const { game } = props;
  const {
    background_image,
    name,
    released,
    genres,
    platforms,
    metacritic,
  } = game;
  const uniquePlatforms = createUniquePlatforms(platforms);

  return (
    <div className={styles.card}>
      <img
        loading='lazy'
        className={styles.cardImage}
        src={background_image}
        alt={name}
      />
      <div className={styles.cardInfo}>
        <div className={styles.cardPlatformsRating}>
          <div className={styles.platforms}>
            {uniquePlatforms.map((platform) => (
              <div className={styles.platform} key={platform}>
                {resolvePlatformIcon(platform)}
              </div>
            ))}
          </div>
          {metacritic}
        </div>
        <div className={styles.cardName}>{name}</div>
        <div className={styles.cardRow}>
          <div>Release date:</div>
          <div>{released}</div>
        </div>
        <div className={styles.cardRow}>
          <div>Genres:</div>
          <div className={styles.cardGenre}>
            {genres.map((genre) => (
              <div key={genre.id}>
                {genre.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
