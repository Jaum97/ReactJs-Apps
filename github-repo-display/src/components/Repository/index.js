import React, { Fragment } from 'react';

const Repository = repo => (
  <Fragment>
    <header>
      <img
        src={repo.owner.avatar_url}
        alt={repo.owner.login}
        height={60}
        width={60}
      />
      <strong>{repo.name}</strong>
      <small>{repo.owner.login}</small>
    </header>

    <ul>
      <li>
        {`${repo.stargazers_count} `}
        <small>stars</small>
      </li>
      <li>
        {`${repo.forks_count} `}
        <small>forks</small>
      </li>
      <li>
        {`${repo.open_issues_count} `}
        <small>issues</small>
      </li>
      <li>
        {`${repo.last_commit} `}
        <small>last commit</small>
      </li>
    </ul>
  </Fragment>
);

export default React.memo(Repository);
