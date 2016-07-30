import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootCeducer = combineReducers({
  courses
});

export default rootCeducer;
