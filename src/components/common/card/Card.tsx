import React, { FC } from 'react';
import { IGame } from '../../../types/games';

import styles from './Card.module.css';

interface CardProps {
  game: IGame;
}

export const Card: FC<CardProps> = ({
  game: { background_image, name, released, genres },
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={background_image} alt={name} />
      <div className={styles.cardInfo}>
        <div className={styles.cardName}>{name}</div>
        <div className={styles.cardRow}>
          <div>Release date:</div>
          <div>{released}</div>
        </div>
        <div className={styles.cardRow}>
          <div>Genres:</div>
          <div>
            {genres.map((genre) => (
              <div key={genre.id}>{genre.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
