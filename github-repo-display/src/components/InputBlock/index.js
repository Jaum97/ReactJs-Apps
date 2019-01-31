import React from 'react';
import InputContainer from './styles';

const InputBlock = ({
  handleAddRepository,
  handleChangeValue,
  repositoryInput
}) => (
  <InputContainer onSubmit={handleAddRepository}>
    <input
      type="text"
      placeholder="user/repo"
      value={repositoryInput}
      onChange={handleChangeValue}
    />
  </InputContainer>
);

export default InputBlock;
