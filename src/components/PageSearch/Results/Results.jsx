import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import MainHeader from '../../UI/MainHeader/MainHeader';
import ResultList from '../../UI/ResultList/ResultList';
import Button from '../../UI/Button/Button';
import ResultItem from '../../UI/ResultList/ResultItem/ResultItem';
import {
  addToFavorites,
  addToWatched,
  removeFromFavorites,
  removeFromWatched,
} from '../../../store/actions/actions';
import SimpleLink from '../../UI/SimpleLink/SimpleLink';
import { getMovies } from '../../../store/reducers/search';

function getMovieResultElements(props) {
  const {
    movies,
    favorites,
    watched,
    onRemoveFromWatched,
    onAddToWatched,
    onRemoveFromFavorites,
    onAddToFavorites,
  } = props;

  return movies.map((movie) => {
    let inFavorites = false;
    for (let i = 0; i < favorites.length; i += 1) {
      if (movie.id === favorites[i].id) {
        inFavorites = true;
        break;
      }
    }
    let inWatched = false;
    for (let i = 0; i < watched.length; i += 1) {
      if (movie.id === watched[i].id) {
        inWatched = true;
        break;
      }
    }

    const buttons = (
      <>
        <Button
          onClick={
            inFavorites
              ? () => onRemoveFromFavorites(movie.id)
              : () => onAddToFavorites(movie)
          }
        >
          {inFavorites ? 'Remove From Favorites' : 'Add To Favorites'}
        </Button>
        <Button
          variant="text"
          onClick={
            inWatched
              ? () => onRemoveFromWatched(movie.id)
              : () => onAddToWatched(movie)
          }
        >
          {inWatched ? 'Remove From Watched' : 'Add to Watched'}
        </Button>
      </>
    );

    return (
      <ResultItem
        key={movie.id}
        item={movie}
        buttons={buttons}
      />
    );
  });
}

function Results(props) {
  const {
    movies,
    errorMessage,
    onPaginationClick,
    page,
    totalResults,
  } = props;

  const moviesFound = movies && movies.length && movies.length > 0;

  if (!moviesFound) {
    let message = (
      <>
        Want to find a movie? Enter keyword in the field above. For example: <SimpleLink to="/?searchStr=Avengers">Avengers</SimpleLink>
      </>
    );
    if (errorMessage) {
      message = errorMessage;
    }
    return (
      <MainHeader>
        {message}
      </MainHeader>
    );
  }


  const movieResultElements = getMovieResultElements(props);
  return (
    <>
      <MainHeader>
        Search Results:
      </MainHeader>
      <ResultList
        limit={10}
        offset={(page - 1) * 10}
        total={totalResults}
        paginationClickHandler={(offset) => {
          const newPage = offset / 10 + 1;
          onPaginationClick(newPage);
        }}
      >
        {movieResultElements}
      </ResultList>
    </>
  );
}

Results.propTypes = {
  movies: PropTypes.array,
  errorMessage: PropTypes.string,
  onPaginationClick: PropTypes.func.isRequired,
  page: PropTypes.number,
  totalResults: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    movies: getMovies(state.search),
    errorMessage: state.search.errorMessage,
    totalResults: state.search.totalResults,
    favorites: state.favorites,
    watched: state.watched,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAddToFavorites: (movie) => {
    dispatch(addToFavorites(movie));
  },
  onRemoveFromFavorites: (id) => {
    dispatch(removeFromFavorites(id));
  },
  onAddToWatched: (movie) => {
    dispatch(addToWatched(movie));
  },
  onRemoveFromWatched: (id) => {
    dispatch(removeFromWatched(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
