import axios from './omdbAxios';

export function searchMovies(searchStr, page = 1) {
  return axios.get('/', {
    params: {
      s: searchStr,
      page,
    },
  }).then((response) => {
    const { data } = response;

    const searchKeyExists = !!data.Search;
    data.totalResults = +data.totalResults;
    const totalResultsKeyCorrect = !Number.isNaN(data.totalResults);
    const ResponseKeyCorrect = data.Response === 'True';

    if (!searchKeyExists || !totalResultsKeyCorrect || !ResponseKeyCorrect) {
      let message = 'Something went wrong, you can try again';
      if (data.Error) {
        message = data.Error;
      }

      throw new Error(message);
    }

    const movies = data.Search.map((movie) => ({
      id: movie.imdbID,
      year: movie.Year,
      name: movie.Title,
    }));
    return {
      movies,
      totalResults: data.totalResults,
    };
  });
}
