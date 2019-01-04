import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import MoviesContainer from './movies/MoviesContainer';
import {ROUTES} from '../routes';
import {Container} from '../common';

class AppBody extends Component {
    render () {
        return (
            <Container
                className="app-body"
            >
                <Switch>
                    <Route path={ROUTES.MOVIES.CATALOG} render={() => (
                        <MoviesContainer />
                    )} />
                    <Route path={ROUTES.REGISTER} exact render={() => (
                        <p className="app-register">
                            This would be the place to register.
                        </p>
                    )} />
                    <Route path={ROUTES.LOGIN} exact render={() => (
                        <p className="app-login">
                            This would be the place to log in.
                        </p>
                    )} />
                    <Route path={ROUTES.ROOT} component={LandingPage} />
                </Switch>
            </Container>
        );
    }
}

export default AppBody;