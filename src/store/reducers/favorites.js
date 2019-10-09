import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from '../actions/actions';

export default function favorites(state = [], action) {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      return state.concat(action.movie);
    }
    case REMOVE_FROM_FAVORITES: {
      return state.filter((item) => item.id !== action.id);
    }
    default: {
      return state;
    }
  }
}
