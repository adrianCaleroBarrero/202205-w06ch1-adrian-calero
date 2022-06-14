import { createAction } from '@reduxjs/toolkit';
import { ChapterModel } from '../../models/got';
import { actionTypes } from './action.types';

export interface iActioon {
  type: actionTypes;
  payload?: any;
}

export const loadGotAction = createAction<Array<ChapterModel>>(
  actionTypes['got@load']
);

export const addGotAction = createAction<ChapterModel>(
  actionTypes['got@create']
);
export const modifyGotAction = createAction<ChapterModel>(
  actionTypes['got@modify']
);
export const deleteGotAction = createAction<ChapterModel>(
  actionTypes['got@delete']
);
