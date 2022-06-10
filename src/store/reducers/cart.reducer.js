import { ADDTOCART, REMOVEFROMCART } from '../actions/cart/cart.actions-types';

const initialState = [];
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADDTOCART: {
    const updatedCart = [...state, action.payload];
    return updatedCart;
  }
  case REMOVEFROMCART: {
    const deletedCart = state.filter((item) => item.id !== action.payload.id);
    return deletedCart;
  }  
  default:
    return state;
  }
};
