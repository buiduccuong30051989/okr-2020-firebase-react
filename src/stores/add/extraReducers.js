/* eslint-disable no-param-reassign */
import { addPost } from './thunks';

const addPostHandler = {
  [addPost.pending]: () => {},
  [addPost.fulfilled]: (state, action) => {
    state.post = action.payload;
  },
  [addPost.rejected]: (state, action) => {
    state.error = action.payload;
  },
};

export default {
  ...addPostHandler,
};
