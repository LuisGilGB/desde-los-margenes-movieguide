const ROUTES = {
    HOME: '/',

    MOVIES: {
        LIST: '/movies',
        DETAIL:'/movies/:movieId',
        MOVIE_EDITOR: '/movies/:movieId/edit',
        NEW_MOVIE_FORM: '/newmovie'
    },

    PEOPLE: {
        LIST: '/people',
        DETAIL:'/people/:personId',
        MOVIE_EDITOR: '/people/:personId/edit',
        NEW_MOVIE_FORM: '/newperson'
    },

    COUNTRIES: {
        LIST: '/countries',
        DETAIL:'/countries/:countryId',
        MOVIE_EDITOR: '/countries/:countryId/edit',
        NEW_MOVIE_FORM: '/newcountry'
    }
}

export default ROUTES;