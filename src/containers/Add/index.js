/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertPost } from '../../stores/add/addSlice';
import { postAddSelector } from '../../stores/add/selectors';
import { addPost } from '../../stores/add/thunks';

import { Form, Input, Button, InputNumber } from 'antd';

function Add() {
  const dispatch = useDispatch();
  const addPostSelect = useSelector(postAddSelector);

  // useEffect(() => {
  //   dispatch(addPostSelect());
  // }, [dispatch]);

  function handleChange(name, value) {
    dispatch(insertPost({ [name]: value }));
  }

  function submit() {
    dispatch(addPost(addPostSelect));
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      size="large"
      style={{ margin: '100px auto' }}
    >
      <Form.Item label="avgRating">
        <InputNumber
          onChange={(value) => handleChange('avgRating', value)}
          value={addPostSelect.avgRating}
        />
      </Form.Item>
      <Form.Item label="city">
        <Input
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="city"
          value={addPostSelect.city}
        />
      </Form.Item>
      <Form.Item label="photo">
        <Input
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="photo"
          value={addPostSelect.photo}
        />
      </Form.Item>
      <Form.Item label="name">
        <Input
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="name"
          value={addPostSelect.name}
        />
      </Form.Item>
      <Form.Item label="category">
        <Input
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="category"
          value={addPostSelect.category}
        />
      </Form.Item>
      <Form.Item label="numRatings">
        <InputNumber
          onChange={(value) => handleChange('numRatings', value)}
          value={addPostSelect.numRatings}
        />
      </Form.Item>
      <Form.Item label="price">
        <InputNumber
          onChange={(value) => handleChange('price', value)}
          value={addPostSelect.price}
        />
      </Form.Item>
      <Form.Item label="Button">
        <Button onClick={submit}>Submit</Button>
      </Form.Item>
    </Form>
  );
}

export default Add;
