import { REQUEST_TEAMS, RECEIVE_TEAMS } from '../constants/constants';

function teams(state = {
  isFetching: false,
  teams: []
}, action) {
  switch (action.type) {
    case REQUEST_TEAMS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TEAMS:
      return Object.assign({}, state, {
        isFetching: false,
        teams: action.teams
      });
    default:
      return state;
  }
}

export default teams;
