export const actions = {
    LOAD_MOVIES: 'LOAD_MOVIES',
    LOAD_MOVIES_DONE: 'LOAD_MOVIES_DONE',
    LOAD_MOVIES_FAILED: 'LOAD_MOVIES_FAILED',
    REQUEST_RANDOM_MOVIE: 'REQUEST_RANDOM_MOVIE'
}

export const actionCreators = {
    loadMovies: history => ({
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
    requestRandomMovie: history => ({
        type: actions.REQUEST_RANDOM_MOVIE,
        payload: { history }
    })
}