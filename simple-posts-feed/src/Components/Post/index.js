import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader/index';
import { PostInner } from '../../styles/GlobalStyle';

const Post = ({ author, avatar, time, body }) => (
  <PostInner>
    <PostHeader author={author} avatar={avatar} time={time} />
    <p>{body}</p>
  </PostInner>
);

Post.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
