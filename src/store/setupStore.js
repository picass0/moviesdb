import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import favoritesReducer from './reducers/favorites';
import watchedReducer from './reducers/watched';
import searchReducer from './reducers/search';
import movieReducer from './reducers/movie';
import { loadState, saveState } from '../utils/localStorage';


export default function setupStore() {
  let initialState = loadState();

  if (!initialState) {
    initialState = {
      favorites: undefined,
      watched: undefined,
      search: undefined,
      movie: undefined,
    };
  }

  const rootReducer = combineReducers({
    favorites: favoritesReducer,
    watched: watchedReducer,
    search: searchReducer,
    movie: movieReducer,
  });
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

  store.subscribe(throttle(() => {
    const state = store.getState();
    saveState({
      favorites: state.favorites,
      watched: state.watched,
    });
  }), 1000);

  return store;
}
