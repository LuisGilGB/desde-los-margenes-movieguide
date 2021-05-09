import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Container from '@luisgilgb/react-container';
import LogInManager from './LogInManager';
import AppHeader from './appHeader/AppHeader';
import AppBody from './AppBody';
import ROUTES from './routes';
import './App.css';
import LogIn from './pages/LogIn';

const history = createBrowserHistory();

const navigate = (to = ROUTES.HOME) => history.push(to || ROUTES.HOME);
const goToHome = () => navigate();
const goToMovies = () => navigate(ROUTES.MOVIES.MAIN);
const goToPeople = () => navigate(ROUTES.PEOPLE.MAIN);
const goToCountries = () => navigate(ROUTES.COUNTRIES.MAIN);

const App = () => (
  <Router history={history}>
    <div data-testid="app">
      <Switch>
        <Route path={ROUTES.LOGIN} component={LogIn} />
        <Route
          path={ROUTES.HOME}
          render={() => (
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
                  onUserPassChange,
                } = logInManagerProps;

                return (
                  <Container className="App" layout="colflex">
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
                        flex={1}
                        goToMovies={goToMovies}
                        goToPeople={goToPeople}
                        goToCountries={goToCountries}
                      />
                    ) : (
                      <Redirect to={ROUTES.LOGIN} />
                    )}
                  </Container>
                );
              }}
            </LogInManager>
          )}
        />
      </Switch>
    </div>
  </Router>
);

export default App;
