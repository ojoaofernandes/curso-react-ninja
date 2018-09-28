import React from 'react';
import PropTypes from 'prop-types';

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <img src={user.img} alt="" />

      <h1 className="username">
        <a href={`https://github.com/${user.login}`}>{user.name}</a>
      </h1>

      <ul className="repos-info">
        <li>
          Repositórios:
          {user.repos}
        </li>
        <li>
          Seguidores:
          {user.followers}
        </li>
        <li>
          Seguindo:
          {user.following}
        </li>
      </ul>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserInfo;
