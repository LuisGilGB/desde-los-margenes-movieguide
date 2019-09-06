import React from 'react';
import {Switch, Route} from 'react-router';
import MoviesContainer from './movies/MoviesContainer';
import ROUTES from './routes';

const AppBody = props => {
    const {
        className,
        goToMovies,
        goToPeople,
        goToCountries,
        ...otherProps
    } = props;

    return (
        <Switch
            {...otherProps}
        >
            <Route path={ROUTES.MOVIES.MAIN} render={() => (
                <MoviesContainer />
            )} />
            <Route path={ROUTES.PEOPLE.MAIN} render={() => (
                <div>People</div>
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