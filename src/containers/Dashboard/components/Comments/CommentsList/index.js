import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Spin, Comment, List } from 'antd';

import InfiniteScroll from 'react-infinite-scroller';

import styles from './index.module.scss';

const CommentsList = ({ comments, height }) => {
  const [hasMore, changeHasMore] = useState(true);
  const handleInfiniteOnLoad = () => {
    changeHasMore(true);
  };

  const loading = false;

  return (
    <div className={styles.Comments} style={{ maxHeight: `${height}px` }}>
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={false}
      >
        <List
          dataSource={comments}
          itemLayout="horizontal"
          renderItem={(props) => <Comment {...props} />}
        >
          {loading && hasMore && (
            <div className={styles.CommentsLoading}>
              <Spin />
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
};

export default CommentsList;
