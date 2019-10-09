import {
  ADD_TO_WATCHED,
  REMOVE_FROM_WATCHED,
} from '../actions/actions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_WATCHED: {
      return state.concat(action.movie);
    }
    case REMOVE_FROM_WATCHED: {
      return state.filter((item) => item.id !== action.id);
    }
    default: {
      return state;
    }
  }
}
