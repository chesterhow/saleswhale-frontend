import { combineReducers } from 'redux';
import user from './user';
import teams from './teams';
import activities from './activities';

export default combineReducers({
  user,
  teams,
  activities
});
