import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Post from './Components/Post/index';
// import PropTypes from 'prop-types';
import GlobalStyle from './styles/GlobalStyle';

const PostsContainer = styled.div``;

class App extends Component {
  state = {
    posts: [
      {
        id: '1',
        author: 'Pedro',
        avatar: '',
        time: '3 min ago',
        body: 'test content goes here'
      },
      {
        id: '2',
        author: 'Silvio',
        avatar: '',
        time: '1 hour ago',
        body: 'test content goes here'
      },
      {
        id: '3',
        author: 'Rodrigo',
        avatar: '',
        time: '2 days ago',
        body: 'test content goes here'
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <PostsContainer>
          {this.state.posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </PostsContainer>
      </Fragment>
    );
  }
}

export default App;
