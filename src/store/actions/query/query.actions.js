import { UPDATEPRODUCTTYPE, UPDATECATEGORY, RESETCATEGORY, RESETPRODUCTTYPE } from './query.actions-types';

export const updateProductType = (productType) => ({
  type: UPDATEPRODUCTTYPE,
  payload: productType,
});

export const updateCategory = (category) => ({
  type: UPDATECATEGORY,
  payload: category,
});

export const resetProductType = () => ({
  type: RESETPRODUCTTYPE,
});

export const resetCategory = () => ({
  type: RESETCATEGORY,
});
