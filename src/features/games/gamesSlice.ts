import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { AppThunk, RootState } from "../../app/store";
import { IGame } from "../../types/games";

const gamesReducer = "games";

interface GamesState {
  games: IGame[];
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

export const getGamesThunk = (): AppThunk => async (dispatch) => {
  try {
    const games = await axios.get("https://api.rawg.io/api/games");
    dispatch(
      getGamesReducer({
        games: games.data.results,
      })
    );
  } catch (e) {
    console.log(e);
  }
};

export const selectGames = (state: RootState) => state.games;

export default gamesSlice.reducer;
