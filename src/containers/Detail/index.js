import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailPost } from '../../stores/detail/thunks';
import { postDetailSelector } from '../../stores/detail/selectors';

const { Meta } = Card;

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postDetail = useSelector(postDetailSelector);

  useEffect(() => {
    dispatch(fetchDetailPost(id));
  }, [dispatch]);

  return (
    <Card
      hoverable
      style={{ width: '100%' }}
      cover={<img alt={postDetail.name} src={postDetail.photo} />}
    >
      <Meta title={postDetail.name} description={postDetail.city} />
    </Card>
  );
}

export default Detail;
