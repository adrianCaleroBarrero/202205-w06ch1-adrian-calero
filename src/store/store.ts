import { configureStore } from '@reduxjs/toolkit';
import { gotReducer } from '../reducer/got/got.reducer';

const preloadedState = {
  chapters: [],
};
export const store = configureStore({
  reducer: gotReducer,
});
