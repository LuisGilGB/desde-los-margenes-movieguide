import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppHeader from './AppHeader';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router>
                    <div className="App">
                        <AppHeader />
                        <Route path='' render={() => (
                            <p className="App-intro">
                                To get started, edit <code>src/App.js</code> and save to reload.
                            </p>
                        )} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
