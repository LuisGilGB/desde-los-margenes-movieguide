const initialState = {
    isAuthenticated: false
}

const reducers = (state = initialState, action) => {
    const actionReducers = {}

    return actionReducers[action.type] ? actionReducers[action.type](state, action) : state;
}

export default reducers;