import {
  API_URL,
  REQUEST_USER,
  RECEIVE_USER,
  REQUEST_TEAMS,
  RECEIVE_TEAMS,
  REQUEST_ACTIVITIES,
  RECEIVE_ACTIVITIES
} from '../constants/constants';

function requestUser() {
  return {
    type: REQUEST_USER
  }
}

function receiveUser(json) {
  return {
    type: RECEIVE_USER,
    user: json
  }
};

export function fetchUser() {
  return dispatch => {
    dispatch(requestUser())
    return fetch(`${API_URL}/current_user`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)));
  }
}
