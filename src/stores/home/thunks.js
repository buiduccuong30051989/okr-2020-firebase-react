/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { homeServices } from '../../services';
import firebase from '../../firebase';

export const fetchPosts = createAsyncThunk('home/fetchPosts', async () => {
  const query = firebase
    .firestore()
    .collection('restaurants')
    .orderBy('avgRating', 'desc')
    .limit(50);

  const snapshot = await query.get();
  const data = snapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id }
  });
  return data;
});

// https://stackoverflow.com/a/52101894
