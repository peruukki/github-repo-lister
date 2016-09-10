// @flow
import React from 'react';
import Spinner from './Spinner';
import './RepositoryList.css';

const renderEmptyList = () => (
  <tr><td>The user has no GitHub repositories.</td></tr>
);

const renderRepository = (repository: Repository) => (
  <tr key={repository.name}>
    <td><a href={repository.link}>{repository.name}</a></td>
    <td>{repository.description}</td>
  </tr>
);

const renderRepositoryList = (repositories: Array<Repository>) => {
  const rows = repositories.length === 0 ?
    renderEmptyList() :
    repositories.map(renderRepository);

  return (
    <table className="RepositoryList-table">
      <thead>
        <tr>
          <th className="RepositoryList-list-heading">
            Repositories:
          </th>
        </tr>
      </thead>

      <tbody className="RepositoryList-list-body">
        {rows}
      </tbody>
    </table>
  );
};

const RepositoryList = (props: { isFetching: boolean, username?: ?string, repositories: Array<Repository>, error?: ?string }) => {
  const repositoryList = props.isFetching
    ? <Spinner />
    : (props.username && !props.error)
      ? renderRepositoryList(props.repositories)
      : null;

  return (
    <div className="RepositoryList">
      {repositoryList}
    </div>
  );
};

RepositoryList.propTypes = {
  isFetching: React.PropTypes.bool.isRequired,
  username: React.PropTypes.string,
  repositories: React.PropTypes.array.isRequired,
  error: React.PropTypes.string
};

export default RepositoryList;
