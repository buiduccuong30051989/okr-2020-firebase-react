/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;
import { fetchPosts } from '../../stores/home/thunks';
import { homeLoadingSelector, postSelector } from '../../stores/home/selectors';
import { Layout } from 'antd';

const { Content } = Layout;

function HomePage() {
  const dispatch = useDispatch();
  const loading = useSelector(homeLoadingSelector);
  const posts = useSelector(postSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return 'loading...';

  return (
    <Layout className="layout">
      <Content style={{ padding: '50px' }}>
        <Row gutter={[30, 30]}>
          {posts.map((post) => (
            <Col span={6}>
              <Link to={`/${post.id}`}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt={post.name} src={post.photo} />}
                >
                  <Meta title={post.name} description={post.city} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
}

export default HomePage;
