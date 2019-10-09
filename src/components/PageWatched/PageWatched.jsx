import React from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '../UI/Container/Container';
import MainHeader from '../UI/MainHeader/MainHeader';
import ResultList from '../UI/ResultList/ResultList';
import Button from '../UI/Button/Button';
import ResultItem from '../UI/ResultList/ResultItem/ResultItem';
import { removeFromWatched } from '../../store/actions/actions';
import SimpleLink from '../UI/SimpleLink/SimpleLink';


function handlePaginationClick(page, history) {
  history.push(`/watched?page=${page}`);
}

function PageWatched(props) {
  const {
    watchedMovies,
    page,
    history,
    onRemoveFromWatched,
  } = props;

  if (watchedMovies.length === 0) {
    return (
      <Container>
        <MainHeader>
          You have not marked any movie as Watched. You can do it in the <SimpleLink to="/">Search Page</SimpleLink>
        </MainHeader>
      </Container>
    );
  }

  const offset = (page - 1) * 10;
  let watchedMoviesToShow = watchedMovies.slice(offset, offset + 10);

  watchedMoviesToShow = watchedMoviesToShow.map((movie) => {
    const buttons = (
      <>
        <Button
          variant="text"
          onClick={() => onRemoveFromWatched(movie.id)}
        >
          Remove From Watched
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


  return (
    <Container>
      <MainHeader>
        Watched Movies
      </MainHeader>
      <ResultList
        limit={10}
        offset={(page - 1) * 10}
        total={watchedMovies.length}
        paginationClickHandler={(newOffset) => {
          const newPage = newOffset / 10 + 1;
          handlePaginationClick(newPage, history);
        }}
      >
        {watchedMoviesToShow}
      </ResultList>
    </Container>
  );
}

PageWatched.propTypes = {
  watchedMovies: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  onRemoveFromWatched: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const params = queryString.parse(ownProps.location.search);
  return {
    watchedMovies: state.watched,
    page: params.page || 1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromWatched: (id) => {
      dispatch(removeFromWatched(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageWatched);
