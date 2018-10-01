import React, { PureComponent } from 'react';
import { createStore } from 'redux';
import Counter from '../../components/Counter';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'DECREMENT': return state - 1;
    case 'INCREMENT': return state + 1;
    default: return state;
  }
};

const store = createStore(counterReducer);

const decrement = () => {
  store.dispatch({ type: 'DECREMENT' });
};

const increment = () => {
  store.dispatch({ type: 'INCREMENT' });
};

class CounterContainer extends PureComponent {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <Counter
        counter={store.getState()}
        handleDecrement={decrement}
        handleIncrement={increment}
      />
    );
  }
}

export default CounterContainer;
