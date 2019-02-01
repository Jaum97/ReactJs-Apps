import React, { Component } from 'react';

import api from '../../services/api';

import RepoList from '../../components/RepoList/index';

import InputBlock from '../../components/InputBlock';

class Main extends Component {
  state = {
    repositories: [],
    repositoryInput: '',
    loading: false
  };

  handleAddRepository = async e => {
    e.preventDefault();

    const { repositoryInput, repositories, loading } = this.state;

    this.setState({ loading: true });

    const { data: repository } = await api.get(`/repos/${repositoryInput}`);

    this.setState({
      repositories: [...repositories, repository],
      loading: false
    });
  };

  handleChangeValue = e => {
    this.setState({ repositoryInput: e.target.value });
  };

  render() {
    const { repositories, repositoryInput } = this.state;
    return (
      <>
        <InputBlock
          handleAddRepository={this.handleAddRepository}
          handleChangeValue={this.handleChangeValue}
          loading={this.state.loading}
          value={repositoryInput}
        />
        <RepoList repositories={repositories} />
      </>
    );
  }
}

export default Main;
