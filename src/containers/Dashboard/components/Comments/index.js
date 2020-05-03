import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Comment, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { _ } from 'utils/trans';

import CommentsList from './CommentsList';
import Editor from './Editor';

const Comments = ({ defaultComments, onSubmit, height }) => {
  const [comments, changeComments] = useState(defaultComments);

  const handleSubmit = (values) => {
    onSubmit(values.comment);
    changeComments([
      ...comments,
      {
        actions: [
          <span>Edit</span>,
          <span>Delete</span>,
          <span>Reply to</span>,
        ],
        author: 'Han Solo',
        avatar: <Avatar icon={<UserOutlined />} alt="Han Solo" />,
        content: <p>{values.comment}</p>,
        datetime: '',
      },
    ]);
  };
  return (
    <Card
      title={`${comments.length} ${
        comments.length === 1 ? _('comment') : _('comments')
      }`}
      bordered={false}
    >
      {comments.length ? (
        <CommentsList comments={comments} height={height || 500} />
      ) : null}
      <Comment
        avatar={<Avatar icon={<UserOutlined />} alt="Han Solo" />}
        content={<Editor onSubmit={handleSubmit} />}
      />
    </Card>
  );
};

Comments.propTypes = {
  defaultComments: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  height: PropTypes.number,
};

export default Comments;
