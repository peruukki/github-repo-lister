import React from 'react';
import './RepositoryList.css';

const renderEmptyList = () => (
  <tr><td>The user has no GitHub repositories.</td></tr>
);

const renderRepository = (repository) => (
  <tr key={repository.name}>
    <td><a href={repository.link}>{repository.name}</a></td>
    <td>{repository.description}</td>
  </tr>
);

const renderRepositoryList = (repositories) => {
  const rows = repositories.length === 0 ?
    renderEmptyList() :
    repositories.map(renderRepository);

  return (
    <table>
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

const RepositoryList = ({username, repositories}) => {
  const repositoryList = username ?
    renderRepositoryList(repositories) :
    null;

  return (
    <div className="RepositoryList">
      {repositoryList}
    </div>
  );
};

RepositoryList.propTypes = {
  repositories: React.PropTypes.array.isRequired
};

export default RepositoryList;
