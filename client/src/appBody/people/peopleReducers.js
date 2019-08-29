import {actions} from './peopleActions';

export const initialState = {
    listData: []
}

const peopleReducers = (state = initialState, action) => {
    const reducers = {
        [actions.LOAD_PEOPLE]() {
            debugger
            return {
                ...state,
                listData: [{
                                name: 'Mariano Rajoy Brey'
                            }]
            }
        }
    }

    return action && action.type && reducers[action.type] ? reducers[action.type] : state;
}

export default peopleReducers;