import styled from 'styled-components';

const RepositoryContainer = styled.div`
  align-items: center;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;

  header {
    padding: 30px;
    img {
      width: 64px;
    }
    strong {
      margin-top: 10px;
      font-size: 24px;
    }
    small {
      font-size: 14px;
      color: #666;
    }
  }
  ul {
    list-style: none;
    li {
      font-weight: bold;
      padding: 12px 20px;
      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }
      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`;
export default RepositoryContainer;
