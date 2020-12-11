/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase';

export const fetchDetailPost = createAsyncThunk(
  'edit/fetchDetailPost',
  async (id) => {
    const query = firebase.firestore().collection('restaurants').doc(id);

    const snapshot = await query.get();
    const data = snapshot.data();
    return data;
  }
);

export const editPost = createAsyncThunk(
  'edit/editPost',
  async ({ editPostSelect, id, history }) => {
    const tutorialsRef = firebase.firestore().collection('restaurants').doc(id);
    tutorialsRef
      .set({
        ...editPostSelect,
      })
      .then(function () {
        history.push('/');
      })
      .catch(function (error) {
        console.error('Error adding Tutorial: ', error);
      });
    return editPostSelect;
  }
);
