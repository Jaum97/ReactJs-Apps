import React from 'react';
import styled from 'styled-components';

const styledHeader = styled.header`
  align-items: center;
  background: #742df8c5;
  color: #00ff2a;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  height: 60px;
  justify-content: center;
  width: 100%;
`;

const Header = () => <styledHeader>Post Feed</styledHeader>;

export default Header;
