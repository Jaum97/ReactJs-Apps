import React from 'react';
import PostHeader from './PostHeader/index';

const Post = props => (
  <Post-Inner>
    <PostHeader
      author={props.data.author}
      avatar={props.data.avatar}
      time={props.data.time}
    />
    <p>{props.data.body}</p>
  </Post-Inner>
);

export default Post;
