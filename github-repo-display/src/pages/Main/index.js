import React, { Component } from 'react';

import api from '../../services/api';

import RepoList from '../../components/RepoList/index';
import InputBlock from '../../components/InputBlock';

class Main extends Component {
  state = {
    repositories: [],
    repositoryInput: ''
  };

  handleAddRepository = async e => {
    e.preventDefault();

    const { repositoryInput, repositories } = this.state;

    const { data: repository } = await api.get(`/repos/${repositoryInput}`);

    this.setState({ repositories: [...repositories, repository] });
  };

  handleChangeValue = e => {
    this.setState({ repositoryInput: e.target.value });
  };

  render() {
    const { repositories, repositoryInput } = this.state;
    return (
      <>
        <InputBlock
          value={repositoryInput}
          handleAddRepository={this.handleAddRepository}
          handleChangeValue={this.handleChangeValue}
        />
        <RepoList repositories={repositories} />
      </>
    );
  }
}

export default Main;
