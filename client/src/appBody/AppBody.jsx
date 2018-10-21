import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Container} from '../common';

class AppBody extends Component {
    render () {
        return (
            <Container
                className="app-body"
            >
                <Switch>
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
                    <Route path='/' render={() => (
                        <p className="app-intro">
                            To get started, edit <code>src/App.js</code> and save to reload.
                        </p>
                    )} />
                </Switch>
            </Container>
        );
    }
}

export default AppBody;