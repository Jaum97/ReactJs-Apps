import styled from 'styled-components';

const RepositoryContainer = styled.div`
  align-items: center;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;

  header {
    img {
      height: 60px;
      width: 60px;
    }
    strong {
      padding-top: 10px;
    }
    small {
      padding-top: 10px;
    }
  }
`;
export default RepositoryContainer;
