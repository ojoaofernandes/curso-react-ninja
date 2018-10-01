const createStore = (reducer) => {
  let state;
  let subscriptions = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    subscriptions.forEach(fn => fn());
  };

  const subscribe = (fn) => {
    subscriptions = [...subscriptions, fn];
  };
  
  return {
    getState: () => state,
    dispatch,
    subscribe,
  }
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
  }

  return state;
};

//const store = Redux.createStore(counterReducer);
const store = createStore(counterReducer);

const decrement = () => store.dispatch({ type: 'DECREMENT' });
const increment = () => store.dispatch({ type: 'INCREMENT' });

const $counter = document.querySelector('[data-js="counter"]');
const $decrement = document.querySelector('[data-js="decrement"]');
const $increment = document.querySelector('[data-js="increment"]');

$decrement.addEventListener('click', decrement, false);
$increment.addEventListener('click', increment, false);

store.subscribe(() => {
  $counter.textContent = store.getState();
});