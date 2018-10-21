import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Container} from '../common';
import LandingPage from './landingPage/LandingPage';

class AppBody extends Component {
    render () {
        return (
            <Container
                className="app-body"
            >
                <Switch>
                    <Route path='/movies' render={() => (
                        <p className="app-register">
                            Movies catalog.
                        </p>
                    )} />
                    <Route path='/register' exact render={() => (
                        <p className="app-register">
                            This would be the place to register.
                        </p>
                    )} />
                    <Route path='/login' exact render={() => (
                        <p className="app-login">
                            This would be the place to log in.
                        </p>
                    )} />
                    <Route path='/' component={LandingPage} />
                </Switch>
            </Container>
        );
    }
}

export default AppBody;