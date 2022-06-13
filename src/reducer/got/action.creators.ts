import { createAction } from '@reduxjs/toolkit';
import { ChapterModel } from '../../models/got';
import { actionTypes } from './action.types';

export interface iActioon {
  type: actionTypes;
  payload?: any;
}

export const loadGotAction = createAction<Array<ChapterModel>>(
  actionTypes['got@load'].toString()
);

export const addGotAction = createAction<ChapterModel>(
  actionTypes['got@create'].toString()
);
export const modifyGotAction = createAction<ChapterModel>(
  actionTypes['got@modify'].toString()
);
export const deleteGotAction = createAction<ChapterModel>(
  actionTypes['got@delete'].toString()
);
