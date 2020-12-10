import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';
import detailReducer from './detail/detailSlice';
import addlReducer from './add/addSlice';

const rootReducer = combineReducers({
  home: homeReducer,
  detail: detailReducer,
  add: addlReducer,
});

export default rootReducer;
