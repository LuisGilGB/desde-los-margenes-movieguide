import {actions} from './peopleActions';

export const initialState = {
    data: []
}

const peopleReducers = (state = initialState, action) => {
    const reducers = {
        [actions.LOAD_PEOPLE]() {
            return {
                ...state,
                data: initialState.data
            }
        }
    }

    return action && action.type && reducers[action.type] ? reducers[action.type] : state;
}

export default peopleReducers;