import styled from 'styled-components';

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }
  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    &:hover {
      background: #52d89f;
    }
  }
`;

export default InputContainer;
