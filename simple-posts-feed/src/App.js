import React, { Component, Fragment } from 'react';
import Header from './Components/Header/index';
import Post from './Components/Post/index';
import GlobalStyle, { PostsContainer } from './styles/GlobalStyle';

class App extends Component {
  state = {
    posts: [
      {
        id: '1',
        author: 'Pedro',
        avatar:
          'https://cdn.shopify.com/s/files/1/0342/0081/products/Zoboomafoo_Zoboo_grande.png?v=1522168916',
        time: '3 min ago',
        body: 'test content goes here'
      },
      {
        id: '2',
        author: 'Silvio',
        avatar:
          'https://cdn.shopify.com/s/files/1/0342/0081/products/Zoboomafoo_Zoboo_grande.png?v=1522168916',
        time: '1 hour ago',
        body: 'test content goes here'
      },
      {
        id: '3',
        author: 'Rodrigo',
        avatar:
          'https://cdn.shopify.com/s/files/1/0342/0081/products/Zoboomafoo_Zoboo_grande.png?v=1522168916',
        time: '2 days ago',
        body: 'test content goes here'
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <PostsContainer>
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </PostsContainer>
      </Fragment>
    );
  }
}

export default App;
