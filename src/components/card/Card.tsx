import React, { FC, memo, Fragment } from 'react';
import { IGame } from '../../types/games';

import styles from './Card.module.css';
import { PlayStationIcon } from '../common/icons';
import { resolvePlatformIcon } from '../../utils/platformIconResolver';

interface CardProps {
  game: IGame;
}

export const Card: FC<CardProps> = memo(({ game }) => {
  const { background_image, name, released, genres, platforms } = game;

  return (
    <div className={styles.card}>
      <img
        loading='lazy'
        className={styles.cardImage}
        src={background_image}
        alt={name}
      />
      <div className={styles.cardInfo}>
        <div>
          {platforms.map((platform) => (
            <Fragment key={platform.platform.id}>
              {resolvePlatformIcon(platform.platform.slug)}
            </Fragment>
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
