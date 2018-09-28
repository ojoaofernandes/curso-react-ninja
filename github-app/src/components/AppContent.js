import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import UserInfo from './UserInfo';
import Actions from './Actions';
import Repos from './Repos';

function AppContent({
  user, repos, stars, handleSearch,
}) {
  return (
    <div className="app">
      <Search handleSearch={handleSearch} />
      {!!user && <UserInfo user={user} />}
      {!!user && <Actions />}
      {!!repos.length && (
        <Repos
          className="repos"
          title="Repositórios"
          repos={repos}
        />
      )}
      {!!stars.length && (
        <Repos
          className="stars"
          title="Favoritos"
          repos={stars}
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
  stars: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default AppContent;
