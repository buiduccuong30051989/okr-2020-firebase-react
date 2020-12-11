/* eslint-disable no-param-reassign */
import { editPost, fetchDetailPost } from './thunks';

const editPostHandler = {
  [editPost.pending]: () => {},
  [editPost.fulfilled]: (state, action) => {
    state.post = action.payload;
  },
  [editPost.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

const fetchDetailPostHandler = {
  [fetchDetailPost.pending]: () => {},
  [fetchDetailPost.fulfilled]: (state, action) => {
    state.post = action.payload;
  },
  [fetchDetailPost.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

export default {
  ...editPostHandler,
  ...fetchDetailPostHandler,
};
