import { combineReducers } from 'redux';
import {
  SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE, CLEAR_FOUND_MOVIES,
} from '../actions/actions';

function isFetching(state = false, action) {
  switch (action.type) {
    case SEARCH_MOVIE_REQUEST:
      return true;
    case SEARCH_MOVIE_SUCCESS:
    case SEARCH_MOVIE_FAILURE:
    case CLEAR_FOUND_MOVIES:
      return false;
    default:
      return state;
  }
}

function totalResults(state = 0, action) {
  switch (action.type) {
    case SEARCH_MOVIE_SUCCESS:
      return action.response.totalResults;
    case SEARCH_MOVIE_FAILURE:
    case CLEAR_FOUND_MOVIES:
      return 0;
    default:
      return state;
  }
}

function moviesById(state = {}, action) {
  let nextState;
  switch (action.type) {
    case SEARCH_MOVIE_SUCCESS:
      nextState = { ...state };
      action.response.movies.forEach((movie) => {
        nextState[movie.id] = movie;
      });
      return nextState;
    case SEARCH_MOVIE_FAILURE:
    case CLEAR_FOUND_MOVIES:
      return {};
    default:
      return state;
  }
}

function movieIds(state = new Set([]), action) {
  switch (action.type) {
    case SEARCH_MOVIE_SUCCESS: {
      const ids = action.response.movies.map((movie) => {
        return movie.id;
      });
      return new Set(ids);
    }
    case SEARCH_MOVIE_FAILURE:
    case CLEAR_FOUND_MOVIES:
      return new Set([]);
    default:
      return state;
  }
}
function errorMessage(state = null, action) {
  switch (action.type) {
    case SEARCH_MOVIE_FAILURE:
      return action.message;
    case SEARCH_MOVIE_SUCCESS:
    case SEARCH_MOVIE_REQUEST:
    case CLEAR_FOUND_MOVIES:
      return null;
    default:
      return state;
  }
}


export default combineReducers({
  isFetching,
  totalResults,
  moviesById,
  movieIds,
  errorMessage,
});

export function getMovies(state) {
  return Array.from(state.movieIds).map((id) => {
    return state.moviesById[id];
  });
}
