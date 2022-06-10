import { ADDTOCART, REMOVEFROMCART } from './cart.actions-types';

export const addToCart = (product) => ({
  type: ADDTOCART,
  payload: product,
});

export const removeFromCart = (product) => ({
  type: REMOVEFROMCART,
  payload: product,
});
