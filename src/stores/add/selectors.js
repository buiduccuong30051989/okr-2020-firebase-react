import { createSelector } from '@reduxjs/toolkit';

const addSelector = (state) => state.add;

export const postAddSelector = createSelector([addSelector], (state) => state.post);
