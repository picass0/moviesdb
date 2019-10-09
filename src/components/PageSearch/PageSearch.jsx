import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import SearchBar from '../UI/SearchBar/SearchBar';
import Container from '../UI/Container/Container';
import Results from './Results/Results';

import {
  clearFoundMovies,
  findMovies,
} from '../../store/actions/actions';
import LoadingWheel from '../../hoc/LoadingWheel';

class PageSearch extends React.Component {
  componentDidMount() {
    const { onSearchMovieRequest, searchStr, page, onClearFoundMovies } = this.props;
    if (searchStr) {
      onSearchMovieRequest(searchStr, page);
    } else {
      onClearFoundMovies();
    }
  }

  componentDidUpdate(prevProps) {
    const { page, searchStr, onSearchMovieRequest, onClearFoundMovies } = this.props;
    const pageNumberIsDifferent = page !== prevProps.page;
    const searchStrIsDifferent = searchStr !== prevProps.searchStr;
    const searchStrEmpty = !searchStr;

    if (searchStrEmpty) {
      onClearFoundMovies();
      return;
    }

    if (searchStrIsDifferent || pageNumberIsDifferent) {
      onSearchMovieRequest(searchStr, page);
    }
  }

  loadSearchPageWithParams(page, searchStr) {
    const { history } = this.props;
    history.push(`/?${queryString.stringify({ page, searchStr })}`);
  }

  render() {
    const {
      searchStr,
      page,
      isFetching,
      history,
    } = this.props;

    return (
      <>
        <SearchBar
          key={history.location.key}
          submitHandler={(newSearchStr) => { this.loadSearchPageWithParams(page, newSearchStr); }}
          searchStr={searchStr}
          disableFindButton={isFetching}
        />
        <Container>
          <LoadingWheel loading={isFetching}>
            <Results onPaginationClick={(newPage) => { this.loadSearchPageWithParams(newPage, searchStr); }} page={page} />
          </LoadingWheel>
        </Container>
      </>
    );
  }
}

PageSearch.propTypes = {
  onSearchMovieRequest: PropTypes.func.isRequired,
  onClearFoundMovies: PropTypes.func.isRequired,
  searchStr: PropTypes.string,
  page: PropTypes.number,
  isFetching: PropTypes.bool,
  history: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  const params = queryString.parse(ownProps.location.search);
  return {
    searchStr: params.searchStr || '',
    page: +params.page || 1,
    isFetching: state.search.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClearFoundMovies: () => {
    return dispatch(clearFoundMovies());
  },
  onSearchMovieRequest: (searchStr, page) => {
    return dispatch(findMovies(searchStr, page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PageSearch);
