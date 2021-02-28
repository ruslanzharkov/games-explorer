import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppThunk, RootState } from '../../app/store';
import { IGame } from '../../types/games';

const gamesReducer = 'games';

interface LoadingState {
  loading: boolean;
}

interface GamesState extends LoadingState {
  games: IGame[];
  next?: string;
}

const initialState: GamesState = {
  games: [],
  next: undefined,
  loading: false,
};

export const gamesSlice = createSlice({
  name: gamesReducer,
  initialState,
  reducers: {
    getGames: (state, action: PayloadAction<GamesState>) => {
      state.games = action.payload.games;
      state.next = action.payload.next;
    },
    setLoading: (state, action: PayloadAction<LoadingState>) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { getGames, setLoading } = gamesSlice.actions;

export const getGamesThunk = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(
      setLoading({
        loading: true,
      })
    );
    const next = getState().gamesReducer.next;
    const prevGames = getState().gamesReducer.games;
    const games = await axios.get(next ?? 'https://api.rawg.io/api/games');
    dispatch(
      getGames({
        games: [...prevGames, ...games.data.results],
        next: games.data.next,
        loading: false,
      })
    );
  } catch (e) {
    console.log(e);
  }
};

export const selectGames = (state: RootState) => state.gamesReducer;

export default gamesSlice.reducer;
