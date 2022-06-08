import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './reducers/products.reducer';
export const store = configureStore({ reducer: productsReducer });
