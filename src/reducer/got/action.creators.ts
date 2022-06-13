import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';

export interface iActioon {
  type: actionTypes;
  payload?: any;
}

export const loadGotAction = createAction(actionTypes['got@load'].toString());

export const addGotAction = createAction(actionTypes['got@create'].toString());
export const modifyGotAction = createAction(
  actionTypes['got@modify'].toString()
);
export const deleteGotAction = createAction(
  actionTypes['got@delete'].toString()
);
