import React from 'react';
import PropTypes from 'prop-types';

function Counter({ counter, handleDecrement, handleIncrement }) {
  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={handleDecrement}>-</button>
      <button type="button" onClick={handleIncrement}>+</button>
    </div>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default Counter;
