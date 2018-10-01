import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import UserInfo from './UserInfo';
import Actions from './Actions';
import Repos from './Repos';

function AppContent({
  user, repos, starred, handleSearch, getRepos, getStarred,
}) {
  return (
    <div className="app">
      <Search handleSearch={handleSearch} />

      {!!user && <UserInfo user={user} />}

      {!!user && (
        <Actions
          getRepos={getRepos}
          getStarred={getStarred}
        />
      )}

      {!!repos.length && (
        <Repos
          className="repos"
          title="Repositórios"
          repos={repos}
        />
      )}

      {!!starred.length && (
        <Repos
          className="starred"
          title="Favoritos"
          repos={starred}
        />
      )}
    </div>
  );
}

AppContent.defaultProps = {
  user: {},
};

AppContent.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
};

export default AppContent;
