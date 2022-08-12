import { UPDATECATEGORY, UPDATEPRODUCTTYPE, RESETPRODUCTTYPE, RESETCATEGORY } from '../actions/query/query.actions-types';

export const initialState = {
  productType: null,
  category: null,
};

export const queryReducer = (state=initialState, action) => {
  switch(action.type) { 
  case UPDATEPRODUCTTYPE:
    return {...state, productType: action.payload};
  case UPDATECATEGORY:
    return {...state, category: action.payload};
  case RESETPRODUCTTYPE: 
    return initialState;
  case RESETCATEGORY:
    return initialState;
  default:
    return state;
  }
};
