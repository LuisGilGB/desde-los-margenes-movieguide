import React from 'react';
import {Switch, Route} from 'react-router';
import ROUTES from './routes';

const AppBody = props => {
    const {
        className,
        ...otherProps
    } = props;

    return (
        <Switch
            {...otherProps}
        >
            <Route path={ROUTES.MOVIES.MAIN} render={() => (
                <div>Movies</div>
            )} />
            <Route path={ROUTES.PEOPLE.MAIN} render={() => (
                <div>People</div>
            )} />
            <Route path={ROUTES.COUNTRIES.MAIN} render={() => (
                <div>Countries</div>
            )} />
            <Route path={ROUTES.HOME} render={() => (
                <div>Go to</div>
            )} />
        </Switch>
    );
}

export default AppBody;