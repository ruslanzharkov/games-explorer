import React, { FC, memo } from 'react';
import { IGame } from '../../types/games';

import styles from './Card.module.css';
import {
  createUniquePlatforms,
  resolvePlatformIcon,
} from '../../utils/platform';

interface CardProps {
  game: IGame;
}

export const Card: FC<CardProps> = memo(({ game }) => {
  const { background_image, name, released, genres, platforms } = game;
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
        <div className={styles.platforms}>
          {uniquePlatforms.map((platform) => (
            <div className={styles.platform} key={platform}>
              {resolvePlatformIcon(platform)}
            </div>
          ))}
        </div>
        <div className={styles.cardName}>{name}</div>
        <div className={styles.cardRow}>
          <div>Release date:</div>
          <div>{released}</div>
        </div>
        <div className={styles.cardRow}>
          <div>Genres:</div>
          <div className={styles.cardGenre}>
            {genres.map((genre, index) => (
              <div key={genre.id}>
                {genre.name}
                {genres.length - 1 !== index ? ', ' : ''}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
