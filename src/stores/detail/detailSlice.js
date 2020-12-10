/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';
import extraReducers from './extraReducers';

const initialState = {
  post: {},
  error: {},
};

const appSlice = createSlice({
  name: 'detail',
  initialState,
  reducers,
  extraReducers,
});

export default appSlice.reducer;
