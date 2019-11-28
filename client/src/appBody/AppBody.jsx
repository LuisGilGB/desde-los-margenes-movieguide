import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Container} from '@luisgilgb/react-container';
import LandingPage from './landingPage/LandingPage';
import MoviesContainer from './movies/MoviesContainer';
import PeopleContainer from './people/PeopleContainer';
import ROUTES from '../routes';

const AppBody = props => (
    <Container
        layout="fit"
        className="app-body"
        {...props}
    >
        <Switch>
            <Route path={ROUTES.MOVIES.CATALOG} component={MoviesContainer} />
            <Route path={ROUTES.PEOPLE.LIST} component={PeopleContainer} />
            {/*<Route path={ROUTES.REGISTER} exact render={() => (
                <Container layout="center" className="app-register">
                    This would be the place to register.
                </Container>
            )} />
            <Route path={ROUTES.LOGIN} exact render={() => (
                <Container layout="center" className="app-login">
                    This would be the place to log in.
                </Container>
            )} />*/}
            <Route path={ROUTES.ROOT} component={LandingPage} />
        </Switch>
    </Container>
);

export default AppBody;