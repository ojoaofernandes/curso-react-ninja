import { connect } from 'react-redux';
import {
  add,
  remove,
  decrement,
  increment,
} from '../../actions/counters';
import Counters from '../../components/Counters';

const mapStateToProps = state => ({ counters: state });

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(add()),
  remove: index => () => dispatch(remove(index)),
  decrement: index => () => dispatch(decrement(index)),
  increment: index => () => dispatch(increment(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
