/* eslint-disable no-param-reassign */
import { fetchDetailPost } from './thunks';

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
  ...fetchDetailPostHandler,
};
