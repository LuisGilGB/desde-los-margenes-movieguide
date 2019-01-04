export const actions = {
    REQUEST_RANDOM_MOVIE: 'REQUEST_RANDOM_MOVIE'
}

export const actionCreators = {
    requestRandomMovie: history => ({
        type: actions.REQUEST_RANDOM_MOVIE,
        payload: { history }
    })
}