import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getGamesThunk, selectGames } from './gamesSlice';

import styles from './Games.module.css';
import { Card } from '../../components/common/card';
import { Loader } from '../../components/common/loader';

export function Games() {
  const { games, loading } = useSelector(selectGames);
  const dispatch = useDispatch();

  const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      dispatch(getGamesThunk());
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getGamesThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.games}>
      {games.length === 0 && loading && <Loader containerClassName={styles.gamesMainLoader} />}
      {games.map((game) => (
        <Card key={game.id} game={game} />
      ))}
      {games.length !== 0 && loading && <Loader />}
    </div>
  );
}
