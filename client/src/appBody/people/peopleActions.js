export const actions = {
    LOAD_PEOPLE: 'LOAD_PEOPLE'
}

export const actionCreators = {
    loadPeople: () => ({
        type: actions.LOAD_PEOPLE,
        payload: {}
    })
}