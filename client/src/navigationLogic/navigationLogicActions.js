export const actions = {
    NAVIGATE_WITH_PUSH: 'NAVIGATE_WITH_PUSH'
}

export const actionCreators = {
    navigateWithPush: (history, path, params) => ({
        type: actions.NAVIGATE_WITH_PUSH,
        payload: {
            history, path, params
        }
    })
}