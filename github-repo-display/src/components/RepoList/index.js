import React, { Fragment } from 'react';
import ListContainer from './styles';
import Repository from '../Repository/index';

const RepoList = ({ repositories }) => (
  <Fragment>
    <ListContainer>
      {repositories.map(repo => (
        <Repository key={repo.id} {...repo} />
      ))}
    </ListContainer>
  </Fragment>
);

export default RepoList;
