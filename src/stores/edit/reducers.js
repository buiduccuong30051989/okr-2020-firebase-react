/* eslint-disable no-param-reassign */

export default {
  insertPost(state, action) {
    state.post = { ...state.post, ...action.payload };
  },
};
