export const actions = {
    LOAD_PEOPLE: 'LOAD_PEOPLE',
    LOAD_PEOPLE_DONE: 'LOAD_PEOPLE_DONE',
    LOAD_PEOPLE_FAILED: 'LOAD_PEOPLE_FAILED',

    LOAD_PERSON_DATA: 'LOAD_PERSON_DATA',
    LOAD_PERSON_DATA_DONE: 'LOAD_PERSON_DATA_DONE',
    LOAD_PERSON_DATA_FAILED: 'LOAD_PERSON_DATA_FAILED'
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
    }),

    loadPersonData: (personId) => ({
        type: actions.LOAD_PERSON_DATA,
        payload: {personId}
    }),
    loadPersonDataDone: (data) => ({
        type: actions.LOAD_PERSON_DATA_DONE,
        payload: {data}
    }),
    loadPersonDataFailed: () => ({
        type: actions.LOAD_PERSON_DATA_FAILED,
        payload: {}
    })
}