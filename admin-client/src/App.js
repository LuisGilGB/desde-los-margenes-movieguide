import React from 'react';
import {Router, Route} from 'react-router';
import {createBrowserHistory} from "history";
import LogInManager from './LogInManager';
import AppHeader from './appHeader/AppHeader';
import AppBody from './AppBody';
import ROUTES from './routes';
import './App.css';

const history = createBrowserHistory();

const App = props => {
    const goToHome = () => history.push(ROUTES.HOME);
    return (
        <Router history={history}>
            <Route path={ROUTES.HOME} render={() => (
                <LogInManager>
                    {(logInManagerProps) => {
                        const {
                            isLoggedIn,
                            logInIsFetching,
                            userMail,
                            userPass,
                            logIn,
                            logOut,
                            onUserMailChange,
                            onUserPassChange
                        } = logInManagerProps;

                        return (
                            <div className="App">
                                <AppHeader
                                    goToHome={goToHome}
                                    logInIsFetching={logInIsFetching}
                                    userMail={userMail}
                                    userPass={userPass}
                                    logIn={logIn}
                                    logOut={logOut}
                                    onUserMailChange={onUserMailChange}
                                    onUserPassChange={onUserPassChange}
                                />
                                {isLoggedIn ? (
                                    <AppBody />
                                ) : (
                                    <div>
                                        Log in, please.
                                    </div>
                                )}
                            </div>
                        )}
                    }
                </LogInManager>
            )} />
        </Router>
    );
}

export default App;
