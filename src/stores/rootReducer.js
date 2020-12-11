import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';
import detailReducer from './detail/detailSlice';
import addlReducer from './add/addSlice';
import editlReducer from './edit/editSlice';

const rootReducer = combineReducers({
  home: homeReducer,
  detail: detailReducer,
  add: addlReducer,
  edit: editlReducer,
});

export default rootReducer;
