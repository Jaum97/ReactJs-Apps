import React from 'react';
import ListContainer from './styles';
import Repository from '../Repository/index';

const RepoList = ({ repositories }) => (
  <>
    <ListContainer>
      {repositories.map(repo => (
        <Repository key={repo.id} {...repo} />
      ))}
    </ListContainer>
  </>
);

export default RepoList;
