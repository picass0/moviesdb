import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import { getMovieById } from '../../store/actions/actions';
import LoadingWheel from '../../hoc/LoadingWheel';
import MainHeader from '../UI/MainHeader/MainHeader';
import SimpleLink from '../UI/SimpleLink/SimpleLink';

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(8),
    textAlign: 'center',
    '@media(min-width: 40rem)': {
      display: 'flex',
    },
  },
  imgWrapper: {
    '@media(min-width: 40rem)': {
      minWidth: '20rem',
      maxwidth: '33%',
    },
    '& img': {
      maxHeight: '25rem',
      '@media(min-width: 40rem)': {
        maxHeight: 'none',
        width: '100%',
      },
      maxWidth: '100%',
    },
  },
  description: {
    textAlign: 'left',
    '@media(min-width: 40rem)': {
      paddingLeft: theme.spacing(8),
    },
  },
  summaryTable: {
    marginTop: theme.spacing(4),
    fontSize: '1.1rem',
    '& td': {
      paddingTop: theme.spacing(2),
    },

    '& td:first-child': {
      color: '#999CB5',
      paddingRight: theme.spacing(4),
    },
  },
  summaryText: {
    lineHeight: 2,
  },
});

class PageMovie extends React.Component {
  componentDidMount() {
    const {
      match,
      onGetMovieById,
    } = this.props;
    onGetMovieById(match.params.id);
  }

  render() {
    const {
      classes,
      movie,
      history,
      isFetching,
      errorMessage,
    } = this.props;

    if (!isFetching && !movie) {
      let message = 'Movie will appear shortly';
      if (errorMessage) {
        message = errorMessage;
      }
      return (
        <Container>
          <MainHeader>
            {message} . You can try to <SimpleLink onClick={() => { window.location.reload(); }}>Refresh the Page</SimpleLink> or <SimpleLink onClick={() => { history.goBack(); }}>Go Back</SimpleLink>
          </MainHeader>
        </Container>
      );
    }

    if (isFetching) {
      return (
        <Container>
          <LoadingWheel loading />
        </Container>
      );
    }

    return (
      <Container>
        <Button onClick={() => { history.goBack(); }}> &#x2190; Back</Button>
        <div className={classes.container}>
          <div className={classes.imgWrapper}>
            <img src={movie.img} alt="Poster" />
          </div>
          <div className={classes.description}>
            <Typography variant="h3">
              {movie.title}
            </Typography>
            <table className={classes.summaryTable}>
              <tbody>
                {movie.year && (
                <tr>
                  <td>Year</td>
                  <td>{movie.year}</td>
                </tr>
                )}
                {movie.country && (
                <tr>
                  <td>Country</td>
                  <td>{movie.country}</td>
                </tr>
                )}
                {movie.director && (
                <tr>
                  <td>Director</td>
                  <td>{movie.director}</td>
                </tr>
                )}
                {movie.genre && (
                <tr>
                  <td>Genre</td>
                  <td>{movie.genre}</td>
                </tr>
                )}
                {movie.imdbRating && (
                <tr>
                  <td>Imdb rating</td>
                  <td>{movie.imdbRating}</td>
                </tr>
                )}
              </tbody>
            </table>
            <p className={classes.summaryText}>
              {movie.plot}
            </p>
          </div>
        </div>
      </Container>
    );
  }
}

PageMovie.propTypes = {
  movie: PropTypes.object,
  history: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  match: PropTypes.object.isRequired,
  onGetMovieById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return state.movie;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMovieById: (id) => { dispatch(getMovieById(id)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageMovie));
