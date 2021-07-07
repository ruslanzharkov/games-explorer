import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';

import { getGamesThunk, selectGames } from './gamesSlice';

import styles from './Games.module.css';
import { Card } from '../../components/common/card';
import { Loader } from '../../components/common/loader';

const breakpointColumnsObj = {
  default: 4,
  1500: 3,
  1200: 2,
  500: 1,
};

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
    <div className={styles.gamesContainer}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonry}
        columnClassName={styles.masonryColumn}
      >
        {games.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </Masonry>
      {loading && (
        <Loader
          containerClassName={
            !Boolean(games.length) ? styles.gamesMainLoader : undefined
          }
        />
      )}
    </div>
  );
}
