import { actions } from './peopleActions';

export const initialState = {
  listData: [],
  listIsFetching: false,
  personData: {},
  personDataIsFetching: false,
};

const peopleReducers = (state = initialState, action) => {
  const reducers = {
    [actions.LOAD_PEOPLE]: () => ({
      ...state,
      listData: initialState.listData,
      listIsFetching: true,
    }),
    [actions.LOAD_PEOPLE_DONE]: () => ({
      ...state,
      listData: action.payload.data,
      listIsFetching: false,
    }),
    [actions.LOAD_PEOPLE_FAILED]: () => ({
      ...state,
      listIsFetching: false,
    }),
    [actions.LOAD_PERSON_DATA]: () => ({
      ...state,
      personData: initialState.personData,
      personDataIsFetching: true,
    }),
    [actions.LOAD_PERSON_DATA_DONE]: () => ({
      ...state,
      personData: action.payload.data,
      personDataIsFetching: false,
    }),
    [actions.LOAD_PERSON_DATA_FAILED]: () => ({
      ...state,
      personDataIsFetching: false,
    }),
  };

  return action && action.type && reducers[action.type]
    ? reducers[action.type]()
    : state;
};

export default peopleReducers;
