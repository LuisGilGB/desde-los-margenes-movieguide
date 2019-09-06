import React from 'react';
import {Switch, Route} from 'react-router';
import MoviesContainer from './movies/MoviesContainer';
import PeopleContainer from './people/PeopleContainer';
import ROUTES from './routes';

const AppBody = props => {
    const {
        goToMovies,
        goToPeople,
        goToCountries
    } = props;

    return (
        <Switch>
            <Route path={ROUTES.MOVIES.MAIN} render={() => (
                <MoviesContainer />
            )} />
            <Route path={ROUTES.PEOPLE.MAIN} render={() => (
                <PeopleContainer />
            )} />
            <Route path={ROUTES.COUNTRIES.MAIN} render={() => (
                <div>Countries</div>
            )} />
            <Route path={ROUTES.HOME} render={() => (
                <div>Go to
                    <div onClick={goToMovies}>Movies</div>
                    <div onClick={goToPeople}>People</div>
                    <div onClick={goToCountries}>Countries</div>
                </div>
            )} />
        </Switch>
    );
}

export default AppBody;