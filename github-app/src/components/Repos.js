import React from 'react';
import PropTypes from 'prop-types';

function Repos({ className, title, repos }) {
  return (
    <ul className={className}>
      <h2>{title}</h2>
      {repos.map(repo => <li key={repo.id}><a href="{repo.link}">{repo.name}</a></li>)}
    </ul>
  );
}

Repos.defaultProps = {
  className: '',
  repos: [],
};

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array,
};

export default Repos;
