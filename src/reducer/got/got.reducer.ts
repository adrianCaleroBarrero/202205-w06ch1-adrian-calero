import { createReducer } from '@reduxjs/toolkit';
import { chapters } from '../../localStore/localStore';
import { ChapterModel } from '../../models/got';
import * as ac from './action.creators';

const initialstate: Array<ChapterModel> = [];
export const gotReducer = createReducer(initialstate, (builder) => {
  return builder
    .addCase(ac.loadGotAction, (state, action) => [...action.payload])
    .addCase(ac.addGotAction, (state, action) => [...state, action.payload])
    .addCase(ac.modifyGotAction, (state, action) =>
      state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      )
    )
    .addCase(ac.deleteGotAction, (state, action) =>
      state.filter((item) => item.id !== action.payload.id)
    )
    .addDefaultCase((state) => state);
});
