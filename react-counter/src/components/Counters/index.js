import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter';

function Counters({
  counters, add, remove, decrement, increment,
}) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {counters.map((counter, index) => (
          <Counter
            key={index}
            counter={counter}
            remove={remove(index)}
            decrement={decrement(index)}
            increment={increment(index)}
          />
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button type="button" onClick={add}>Add counter</button>
      </div>
    </div>
  );
}

Counters.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.number).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};

export default Counters;
