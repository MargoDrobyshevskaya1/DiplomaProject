import { UPDATEPAGEQTY } from './pageQty.actions-types';

export const updatePageQty = (pageQty) => ({
  type: UPDATEPAGEQTY,
  payload: pageQty,
});
