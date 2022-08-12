import { UPDATEPAGE, RESETPAGE } from '../actions/pageNumber/pageNumber.actions-types';

export const initialState = 1;
export const pageNumberReducer = (state=initialState, action) => {
  switch(action.type) {
  case UPDATEPAGE:
    return action.payload;
  case RESETPAGE:
    return initialState;
  default:
    return state;
  }
};
