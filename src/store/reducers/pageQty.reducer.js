import { UPDATEPAGEQTY } from '../actions/pageQty/pageQty.actions-types';

export const initialState = 0;
export const pageQtyReducer = (state=initialState, action) => {
  switch(action.type) {
  case UPDATEPAGEQTY:
    console.log(action.payload);
    return action.payload;
  default:
    return state;
  }
};
