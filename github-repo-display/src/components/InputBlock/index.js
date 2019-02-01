import React from 'react';
import InputContainer from './styles';

const InputBlock = ({
  handleAddRepository,
  handleChangeValue,
  repositoryInput,
  loading
}) => (
  <InputContainer onSubmit={handleAddRepository}>
    <h1>Get Repo</h1>
    <input
      type="text"
      placeholder="user/repo"
      value={repositoryInput}
      onChange={handleChangeValue}
    />
    <button type="submit">{loading ? 'Loading...' : 'OK'}</button>
  </InputContainer>
);

export default InputBlock;
