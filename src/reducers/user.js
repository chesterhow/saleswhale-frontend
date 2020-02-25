import { REQUEST_USER, RECEIVE_USER } from '../constants/constants';

function user(state = {
  isFetching: false,
  user: {}
}, action) {
  switch (action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user
      });
    default:
      return state;
  }
}

export default user;
