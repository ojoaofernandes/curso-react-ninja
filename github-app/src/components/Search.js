import React from 'react';
import PropTypes from 'prop-types';

function Search({ handleSearch }) {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Digite o nome do usuário no Github"
        onKeyUp={handleSearch}
      />
    </div>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
