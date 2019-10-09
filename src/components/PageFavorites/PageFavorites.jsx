import React from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '../UI/Container/Container';
import MainHeader from '../UI/MainHeader/MainHeader';
import ResultList from '../UI/ResultList/ResultList';
import Button from '../UI/Button/Button';
import ResultItem from '../UI/ResultList/ResultItem/ResultItem';
import { removeFromFavorites } from '../../store/actions/actions';
import SimpleLink from '../UI/SimpleLink/SimpleLink';


function handlePaginationClick(page, history) {
  history.push(`/favorites?page=${page}`);
}

function PageFavorites(props) {
  const {
    favoriteMovies,
    page,
    history,
    onRemoveFromFavorites,
  } = props;

  if (favoriteMovies.length === 0) {
    return (
      <Container>
        <MainHeader>
          You have not Favored any movie yet. You can do it in the <SimpleLink to="/">Search Page</SimpleLink>
        </MainHeader>
      </Container>
    );
  }

  const offset = (page - 1) * 10;
  let favoriteMoviesToShow = favoriteMovies.slice(offset, offset + 10);

  favoriteMoviesToShow = favoriteMoviesToShow.map((movie) => {
    const buttons = (
      <>
        <Button
          onClick={() => onRemoveFromFavorites(movie.id)}
        >
          Remove From Favorites
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
        Favorite Movies
      </MainHeader>
      <ResultList
        limit={10}
        offset={(page - 1) * 10}
        total={favoriteMovies.length}
        paginationClickHandler={(newOffset) => {
          const newPage = newOffset / 10 + 1;
          handlePaginationClick(newPage, history);
        }}
      >
        {favoriteMoviesToShow}
      </ResultList>
    </Container>
  );
}

PageFavorites.propTypes = {
  favoriteMovies: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  onRemoveFromFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const params = queryString.parse(ownProps.location.search);
  return {
    favoriteMovies: state.favorites,
    page: params.page || 1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromFavorites: (id) => {
      dispatch(removeFromFavorites(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageFavorites);
