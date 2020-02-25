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
}

export function fetchUser() {
  return dispatch => {
    dispatch(requestUser());
    return fetch(`${API_URL}/current_user`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)));
  }
}

function requestTeams() {
  return {
    type: REQUEST_TEAMS
  }
}

function receiveTeams(json) {
  return {
    type: RECEIVE_TEAMS,
    teams: json
  }
}

export function fetchTeams() {
  return dispatch => {
    dispatch(requestTeams());
    return fetch(`${API_URL}/teams`)
      .then(response => response.json())
      .then(json => dispatch(receiveTeams(json)));
  }
}

function requestActivities() {
  return {
    type: REQUEST_ACTIVITIES
  }
}

function receiveActivities(json) {
  return {
    type: RECEIVE_ACTIVITIES,
    activities: json
  }
}

export function fetchActivities() {
  return dispatch => {
    dispatch(requestActivities());
    return fetch(`${API_URL}/activities`)
      .then(response => response.json())
      .then(json => dispatch(receiveActivities(json)));
  }
}