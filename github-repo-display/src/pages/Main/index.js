import React, { Component } from 'react';

import api from '../../services/api';

import RepoList from '../../components/RepoList/index';

import InputBlock from '../../components/InputBlock';

class Main extends Component {
  state = {
    isLoading: false,
    repositories: [],
    repositoryInput: ''
  };

  handleAddRepository = async e => {
    e.preventDefault();

    const { repositoryInput, repositories, isLoading } = this.state;

    this.setState({ isLoading: true });

    const { data: repository } = await api.get(`/repos/${repositoryInput}`);

    this.setState({
      repositories: [...repositories, repository],
      isLoading: false
    });
  };

  handleChangeValue = e => {
    this.setState({ repositoryInput: e.target.value });
  };

  render() {
    const { repositories, repositoryInput, isLoading } = this.state;
    return (
      <>
        <InputBlock
          handleAddRepository={this.handleAddRepository}
          handleChangeValue={this.handleChangeValue}
          isLoading={isLoading}
          value={repositoryInput}
        />
        <RepoList repositories={repositories} />
      </>
    );
  }
}

export default Main;
