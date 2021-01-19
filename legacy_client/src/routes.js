export const ROUTES = {
    ROOT: '/',

    LOGIN: '/login',

    REGISTER: '/register',

    PEOPLE: {
        LIST: '/people',
        DETAIL: '/people/:personId',
        NEW_PERSON_FORM: '/people/newperson'
    },

    MOVIES: {
        CATALOG: '/movies',
        DETAIL: '/movies/:movieId'
    }
}

export default ROUTES;