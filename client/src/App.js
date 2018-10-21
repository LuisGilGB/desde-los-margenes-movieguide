import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Container} from './common';
import AppHeader from './AppHeader';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router>
                    <Container className="app">
                        <AppHeader />
                        <Route path='/' exact render={() => (
                            <p className="app-intro">
                                To get started, edit <code>src/App.js</code> and save to reload.
                            </p>
                        )} />
                    </Container>
                </Router>
            </Provider>
        );
    }
}

export default App;
