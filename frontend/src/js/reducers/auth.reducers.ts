import { BaseAction, actionIds } from '../common';

export type authState = number[];

export const authReducer = (
  state: authState = [0],
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.GET_NUMBER_REQUEST_COMPLETED:
      return [...state, action.payload];
  }
  return state;
};