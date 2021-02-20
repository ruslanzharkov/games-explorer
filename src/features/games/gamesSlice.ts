import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

const gamesReducer = 'games';

interface GamesState {
  games: any[];
}

const initialState: GamesState = {
  games: [],
};

export const gamesSlice = createSlice({
  name: gamesReducer,
  initialState,
  reducers: {
    getGamesReducer: (state, action: PayloadAction<GamesState>) => {
      state.games = action.payload.games;
    },
  },
});

export const { getGamesReducer } = gamesSlice.actions;

export const getGamesThunk = (): AppThunk => async dispatch => {
  try {
    const response = await fetch('https://api.rawg.io/api/games');
    const games = await response.json();
    dispatch(getGamesReducer({
      games: games.results
    }));
  } catch (e) {
    console.log(e);
  }
};

export const selectGames = (state: RootState) => state.games;

export default gamesSlice.reducer;
