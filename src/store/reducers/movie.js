import { combineReducers } from 'redux';
import { GET_MOVIE_BY_ID_FAILURE, GET_MOVIE_BY_ID_REQUEST, GET_MOVIE_BY_ID_SUCCESS } from '../actions/actions';

function movie(state = null, action) {
  switch (action.type) {
    case GET_MOVIE_BY_ID_SUCCESS:
      return action.response;
    case GET_MOVIE_BY_ID_FAILURE:
      return null;
    default:
      return state;
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case GET_MOVIE_BY_ID_REQUEST:
      return true;
    case GET_MOVIE_BY_ID_SUCCESS:
    case GET_MOVIE_BY_ID_FAILURE:
      return false;
    default:
      return state;
  }
}

function errorMessage(state = null, action) {
  switch (action.type) {
    case GET_MOVIE_BY_ID_FAILURE:
      return action.message;
    case GET_MOVIE_BY_ID_REQUEST:
    case GET_MOVIE_BY_ID_SUCCESS:
      return null;
    default:
      return state;
  }
}

export default combineReducers({ movie, isFetching, errorMessage });
