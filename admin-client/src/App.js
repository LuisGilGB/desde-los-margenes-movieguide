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
    const navigate = (to = ROUTES.HOME) => history.push(to || ROUTES.HOME);
    const goToHome = () => navigate();
    const goToMovies = () => navigate(ROUTES.MOVIES.MAIN);
    const goToPeople = () => navigate(ROUTES.PEOPLE.MAIN);
    const goToCountries = () => navigate(ROUTES.COUNTRIES.MAIN);
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
                                    <AppBody
                                        history={history}
                                        goToMovies={goToMovies}
                                        goToPeople={goToPeople}
                                        goToCountries={goToCountries}
                                    />
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
