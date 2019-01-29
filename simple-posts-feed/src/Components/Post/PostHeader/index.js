import React from 'react';
import { PostHeaderInner } from '../../../styles/GlobalStyle';

const PostHeader = ({ avatar, author, time }) => (
  <PostHeaderInner>
    <img alt="test" src={avatar} />
    <strong>{author}</strong>
    <span>{time}</span>
  </PostHeaderInner>
);

export default PostHeader;
