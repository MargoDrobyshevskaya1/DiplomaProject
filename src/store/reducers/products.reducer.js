import { PRODUCTS, UPDATERODUCTS } from '../actions/products.actions-types';

export const initialState = { productsShow: [] };

export const productsReducer = (state = initialState, action) => {
  // const { type, payload } = action;

  switch (action.type) {
    case PRODUCTS:
      return initialState;
    case UPDATERODUCTS:
      return { ...initialState, productsShow: action.payload };

    default:
      return state;
  }
};
