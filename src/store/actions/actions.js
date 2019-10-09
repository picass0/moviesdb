import { searchMovies } from '../../api/searchMovies';
import { findMovieById } from '../../api/findMovieById';

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const ADD_TO_WATCHED = 'ADD_TO_WATCHED';
export const REMOVE_FROM_WATCHED = 'REMOVE_FROM_WATCHED';

export const SEARCH_MOVIE_REQUEST = 'SEARCH_MOVIE_REQUEST';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIE_FAILURE';

export const CLEAR_FOUND_MOVIES = 'CLEAR_FOUND_MOVIES';

export const GET_MOVIE_BY_ID_REQUEST = 'GET_MOVIE_BY_ID_REQUEST';
export const GET_MOVIE_BY_ID_SUCCESS = 'GET_MOVIE_BY_ID_SUCCESS';
export const GET_MOVIE_BY_ID_FAILURE = 'GET_MOVIE_BY_ID_FAILURE';


export function addToFavorites(movie) {
  return { type: ADD_TO_FAVORITES, movie };
}

export function removeFromFavorites(id) {
  return { type: REMOVE_FROM_FAVORITES, id };
}

export function addToWatched(movie) {
  return { type: ADD_TO_WATCHED, movie };
}

export function removeFromWatched(id) {
  return { type: REMOVE_FROM_WATCHED, id };
}

export function clearFoundMovies() {
  return { type: CLEAR_FOUND_MOVIES };
}

export function findMovies(searchStr, page) {
  return (dispatch, getState) => {
    if (getState().search.isFetching) {
      return Promise.resolve();
    }

    dispatch({ type: SEARCH_MOVIE_REQUEST });
    return searchMovies(searchStr, page).then(
      (response) => {
        dispatch({ type: SEARCH_MOVIE_SUCCESS, response });
      },
      (error) => {
        dispatch({ type: SEARCH_MOVIE_FAILURE, message: error.message });
      },
    );
  };
}

export function getMovieById(id) {
  return (dispatch, getState) => {
    if (getState().movie.isFetching) {
      return Promise.resolve();
    }

    dispatch({ type: GET_MOVIE_BY_ID_REQUEST });
    return findMovieById(id).then(
      (response) => {
        dispatch({ type: GET_MOVIE_BY_ID_SUCCESS, response });
      },
      (error) => {
        dispatch({ type: GET_MOVIE_BY_ID_FAILURE, message: error.message });
      },
    );
  };
}
