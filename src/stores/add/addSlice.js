/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';
import extraReducers from './extraReducers';

const initialState = {
  post: {
    avgRating: undefined,
    city: undefined,
    photo: undefined,
    name: undefined,
    category: undefined,
    numRatings: undefined,
    price: undefined,
  },
  error: {},
};

const appSlice = createSlice({
  name: 'add',
  initialState,
  reducers,
  extraReducers,
});

export const { insertPost } = appSlice.actions;

export default appSlice.reducer;
