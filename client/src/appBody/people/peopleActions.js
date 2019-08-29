export const actions = {
    LOAD_PEOPLE: 'LOAD_PEOPLE',
    LOAD_PEOPLE_DONE: 'LOAD_PEOPLE_DONE',
    LOAD_PEOPLE_FAILED: 'LOAD_PEOPLE_FAILED'
}

export const actionCreators = {
    loadPeople: () => ({
        type: actions.LOAD_PEOPLE,
        payload: {}
    }),
    loadPeopleDone: (data) => ({
        type: actions.LOAD_PEOPLE_DONE,
        payload: {data}
    }),
    loadPeopleFailed: () => ({
        type: actions.LOAD_PEOPLE_FAILED,
        payload: {}
    })
}