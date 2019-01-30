import React, { Component } from 'react';
import api from '../../services/api';

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

  render() {
    const { repositories, repositoryInput } = this.state;
    return (
      <>
        <h1>Main</h1>
        <form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
        </form>

        <ul>
          <li>test</li>
          {repositories.map(x => (
            <li>{x.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Main;
