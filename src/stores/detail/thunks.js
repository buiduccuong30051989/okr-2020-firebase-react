/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import firebase from '../../firebase';

export const fetchDetailPost = createAsyncThunk(
  'detail/fetchDetailPost',
  async (id) => {
    const query = firebase.firestore().collection('restaurants').doc(id);

    const snapshot = await query.get();
    const data = snapshot.data();
    return data;
  }
);
