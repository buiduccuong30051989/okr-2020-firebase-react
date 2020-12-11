import { createSelector } from '@reduxjs/toolkit';

const editSelector = (state) => state.edit;

export const postEditSelector = createSelector([editSelector], (state) => state.post);
