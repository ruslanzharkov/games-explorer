import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gamesReducer from '../features/games/gamesSlice';

export const store = configureStore({
  reducer: {
    gamesReducer: gamesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
