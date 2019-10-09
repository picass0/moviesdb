import axios from './omdbAxios';

export function findMovieById(id) {
  return axios.get('/', {
    params: {
      i: id,
    },
  }).then((response) => {
    const { data } = response;
    return {
      img: data.Poster,
      title: data.Title,
      year: data.Year,
      imdbRating: data.imdbRating,
      country: data.Country,
      director: data.Director,
      genre: data.Genre,
      plot: data.Plot,
    };
  });
}
