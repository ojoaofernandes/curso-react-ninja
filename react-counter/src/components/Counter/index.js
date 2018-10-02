import React from 'react';
import PropTypes from 'prop-types';

function Counter({
  counter, remove, decrement, increment,
}) {
  return (
    <div style={{ position: 'relative', border: '1px solid gray' }}>
      <h1>{counter}</h1>
      <button type="button" onClick={decrement}>-</button>
      <button type="button" onClick={increment}>+</button>
      <button
        type="button"
        style={{ position: 'absolute', right: 0, top: 0 }}
        onClick={remove}
      >
        &times;
      </button>
    </div>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};

export default Counter;
