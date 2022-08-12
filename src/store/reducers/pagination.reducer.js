import { SHOWPAGINATION, RESETPAGINATION } from '../actions/pagination/pagination.actions-types';

export const intialState = false;
export const paginationReducer = (state=intialState, action) => {
  switch(action.type) {
  case SHOWPAGINATION:
    return !intialState;
  case RESETPAGINATION: 
    return intialState;
  default:
    return state;
  }
};
