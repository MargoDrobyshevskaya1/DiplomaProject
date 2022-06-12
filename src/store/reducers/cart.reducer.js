import { ADDTOCART, REMOVEFROMCART } from '../actions/cart/cart.actions-types';

export const initialState = [];
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADDTOCART: {
    const updatedCart = [...state, action.payload];
    return updatedCart;
  }
  case REMOVEFROMCART: {
    const deletedProduct = state.filter((item) => item.id !== action.payload.id);
    return deletedProduct;
  }  
  default:
    return state;
  }
};
