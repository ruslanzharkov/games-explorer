import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getGamesThunk, selectGames } from "./gamesSlice";

import styles from "./Games.module.css";
import { Card } from "../../components/common/card";

export function Games() {
  const { games } = useSelector(selectGames);
  const dispatch = useDispatch();
  console.log(games);

  useEffect(() => {
    dispatch(getGamesThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.games}>
      {games.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
}
