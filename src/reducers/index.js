import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootCeducer = combineReducers({
  courses,
  authors
});

export default rootCeducer;
