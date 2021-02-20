import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {getGamesThunk, selectGames} from "./gamesSlice";

import styles from './Games.module.css';

export function Games() {
  const {games} = useSelector(selectGames);
  const dispatch = useDispatch();
  console.log(games);

  useEffect(() => {
    dispatch(getGamesThunk());
  }, [])

  return (
    <div>
      {games.map((game) => (
        <div className={styles.game}>
          <img className={styles.gamePicture} src={game.background_image} alt={game.name}/>
        </div>
      ))}
    </div>
  );
}
