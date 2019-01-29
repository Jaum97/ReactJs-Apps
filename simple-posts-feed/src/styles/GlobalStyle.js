import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }
 body{
    background: #E9EBEE;
    font-family: sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export const styledHeader = styled.div`
  align-items: center;
  background: #4267b2;
  border-bottom: 1px solid #29487d;
  color: #ffffff;
  display: flex;
  font-size: 20px;
  height: 60px;
  justify-content: center;
`;

export const PostsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const PostInner = styled.div`
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 30px;
  padding: 30px;
  width: 700px;
  p {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
`;

export const PostHeaderInner = styled.div`
  align-items: center;
  display: flex;
  img {
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }
  strong {
    color: #666666;
    font-size: 16px;
  }
  span {
    color: #333333;
    border-top: 1px solid #eee;
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
    padding-top: 20px;
  }
`;

export default GlobalStyle;
