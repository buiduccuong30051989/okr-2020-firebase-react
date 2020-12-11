import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  InputNumber,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailPost, editPost } from '../../stores/edit/thunks';
import { postEditSelector } from '../../stores/edit/selectors';
import { insertPost } from '../../stores/edit/editSlice';

function Edit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const editPostSelect = useSelector(postEditSelector);

  function handleChange(name, value) {
    dispatch(insertPost({ [name]: value }));
  }

  function submit() {
    dispatch(editPost({ editPostSelect, id, history }));
  }

  useEffect(() => {
    dispatch(fetchDetailPost(id));
  }, [dispatch, id]);

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
          value={editPostSelect.avgRating}
        />
      </Form.Item>
      <Form.Item label="city">
        <Input
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="city"
          value={editPostSelect.city}
        />
      </Form.Item>
      <Form.Item label="photo">
        <Input
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="photo"
          value={editPostSelect.photo}
        />
      </Form.Item>
      <Form.Item label="name">
        <Input
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="name"
          value={editPostSelect.name}
        />
      </Form.Item>
      <Form.Item label="category">
        <Input
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="category"
          value={editPostSelect.category}
        />
      </Form.Item>
      <Form.Item label="numRatings">
        <InputNumber
          onChange={(value) => handleChange('numRatings', value)}
          value={editPostSelect.numRatings}
        />
      </Form.Item>
      <Form.Item label="price">
        <InputNumber
          onChange={(value) => handleChange('price', value)}
          value={editPostSelect.price}
        />
      </Form.Item>
      <Form.Item label="Button">
        <Button onClick={submit}>Submit</Button>
      </Form.Item>
    </Form>
  );
}

export default Edit;
