import { createSelector } from '@reduxjs/toolkit';

const detailSelector = (state) => state.detail;

export const postDetailSelector = createSelector([detailSelector], (state) => state.post);
