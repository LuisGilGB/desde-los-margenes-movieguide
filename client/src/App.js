import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Container} from './common';
import AppHeader from './appHeader/AppHeader';
import AppBody from './appBody/AppBody';
import './App.css';

const App = props => {
    const {
        store,
        history
    } = props;

    return (
        <Provider store={store}>
            <Router history={history}>
                <Container layout="vflex" className="app">
                    <AppHeader />
                    <AppBody flex={1}/>
                </Container>
            </Router>
        </Provider>
    );
}

export default App;
