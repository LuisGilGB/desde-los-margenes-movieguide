import { actions } from './moviesActions';

export const initialState = {
  movies: [],
  currentMovieData: {},
};

const moviesReducers = (state = initialState, action) => {
  const actionTypes = {
    [actions.LOAD_MOVIES]() {
      return {
        ...state,
        movies: initialState.movies,
      };
    },
    [actions.LOAD_MOVIES_DONE]() {
      const { movies } = action.payload;
      return {
        ...state,
        movies,
      };
    },
    [actions.LOAD_MOVIE_DETAIL]() {
      return {
        ...state,
        currentMovieData: initialState.currentMovieData,
      };
    },
    [actions.LOAD_MOVIE_DETAIL_DONE]() {
      const { movieData: currentMovieData } = action.payload;
      return {
        ...state,
        currentMovieData,
      };
    },
  };

  return action && action.type && actionTypes[action.type]
    ? actionTypes[action.type]()
    : { ...state };
};

export default moviesReducers;
