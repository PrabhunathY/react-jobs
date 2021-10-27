import { combineReducers } from 'redux';
import ProfileReducer from './ProfileReducer';
import JobMatchesReducer from './JobMatchesReducer';

export default combineReducers({
  profile: ProfileReducer,
  matches: JobMatchesReducer,
});