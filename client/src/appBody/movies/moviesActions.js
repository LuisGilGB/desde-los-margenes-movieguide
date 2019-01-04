export const actions = {
    LOAD_MOVIES: 'LOAD_MOVIES',
    LOAD_MOVIES_DONE: 'LOAD_MOVIES_DONE',
    LOAD_MOVIES_FAILED: 'LOAD_MOVIES_FAILED',
    LOAD_MOVIE_DETAIL: 'LOAD_MOVIE_DETAIL',
    LOAD_MOVIE_DETAIL_DONE: 'LOAD_MOVIE_DETAIL_DONE',
    LOAD_MOVIE_DETAIL_FAILED: 'LOAD_MOVIE_DETAIL_FAILED',
    REQUEST_RANDOM_MOVIE: 'REQUEST_RANDOM_MOVIE'
}

export const actionCreators = {
    loadMovies: () => ({
        type: actions.LOAD_MOVIES,
        payload: {}
    }),
    loadMoviesDone: movies => ({
        type: actions.LOAD_MOVIES_DONE,
        payload: { movies }
    }),
    loadMoviesFailed: () => ({
        type: actions.LOAD_MOVIES_FAILED,
        payload: {}
    }),
    loadMovieDetail: movieId => ({
        type: actions.LOAD_MOVIE_DETAIL,
        payload: { movieId }
    }),
    loadMovieDetailDone: movieData => ({
        type: actions.LOAD_MOVIE_DETAIL_DONE,
        payload: { movieData }
    }),
    loadMovieDetailFailed: () => ({
        type: actions.LOAD_MOVIE_DETAIL_FAILED,
        payload: {}
    }),
    requestRandomMovie: history => ({
        type: actions.REQUEST_RANDOM_MOVIE,
        payload: { history }
    })
}