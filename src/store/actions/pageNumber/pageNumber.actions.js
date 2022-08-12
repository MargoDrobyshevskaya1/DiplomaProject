import { UPDATEPAGE, RESETPAGE } from './pageNumber.actions-types';

export const updatePage = (pageNumber) => ({
  type: UPDATEPAGE,
  payload: pageNumber,
});

export const resetPage = () => ({
  type: RESETPAGE,
});
