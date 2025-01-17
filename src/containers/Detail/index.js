import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'antd';
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
  }, [dispatch, id]);

  return (
    <>
      <Card
        hoverable
        style={{ width: '50vw', margin: '60px auto' }}
        cover={<img alt={postDetail.name} src={postDetail.photo} />}
      >
        <Meta title={postDetail.name} description={postDetail.city} />
      </Card>
      <Link
        style={{ display: 'block', margin: '50px auto', width: '300px' }}
        to={`/edit/${id}`}
      >
        <Button style={{ width: '100%' }} type="primary" size="large">
          Edit
        </Button>
      </Link>
    </>
  );
}

export default Detail;
