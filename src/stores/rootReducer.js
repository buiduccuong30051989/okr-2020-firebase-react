import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';
import detailReducer from './detail/detailSlice';

const rootReducer = combineReducers({
  home: homeReducer,
  detail: detailReducer,
});

export default rootReducer;
