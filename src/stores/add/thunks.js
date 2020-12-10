/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import firebase from '../../firebase';

export const addPost = createAsyncThunk('add/addPost', async (post) => {
  // const query = firebase.firestore().collection('restaurants').add();

  // const snapshot = await query.get();
  // const data = snapshot.data();
  // return data;
  // console.log('addPost', addPost);
  console.log(post)
  const tutorialsRef = firebase.firestore().collection('restaurants');
  tutorialsRef
    .add({
      ...post,
    })
    .then(function (docRef) {
      console.log('Tutorial created with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding Tutorial: ', error);
    });
  return post;
});
