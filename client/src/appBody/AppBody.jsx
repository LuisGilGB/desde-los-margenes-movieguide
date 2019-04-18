import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import MoviesContainer from './movies/MoviesContainer';
import {ROUTES} from '../routes';
import {Container} from '../common';

const AppBody = props => (
    <Container
        layout="fit"
        className="app-body"
        {...props}
    >
        <Switch>
            <Route path={ROUTES.MOVIES.CATALOG} render={() => (
                <MoviesContainer />
            )} />
            <Route path={ROUTES.REGISTER} exact render={() => (
                <Container layout="center" className="app-register">
                    This would be the place to register.
                </Container>
            )} />
            <Route path={ROUTES.LOGIN} exact render={() => (
                <Container layout="center" className="app-login">
                    This would be the place to log in.
                </Container>
            )} />
            <Route path={ROUTES.ROOT} component={LandingPage} />
        </Switch>
    </Container>
);

export default AppBody;