import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getGamesThunk, selectGames } from "./gamesSlice";

import styles from "./Games.module.css";

export function Games() {
  const { games } = useSelector(selectGames);
  const dispatch = useDispatch();
  console.log(games);

  useEffect(() => {
    dispatch(getGamesThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {games.map((game) => (
        <div className={styles.game} key={game.id}>
          <img
            className={styles.gamePicture}
            src={game.background_image}
            alt={game.name}
          />
        </div>
      ))}
    </div>
  );
}
