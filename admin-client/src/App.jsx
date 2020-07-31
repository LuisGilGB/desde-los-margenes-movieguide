import React, { useEffect } from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Container from '@luisgilgb/react-container';
import { LogInManager } from './userContext';
import AppHeader from './appHeader/AppHeader';
import AppBody from './appBody/AppBody';
import ROUTES from './routes';
import './App.css';

const history = createBrowserHistory();

const navigate = (to = ROUTES.HOME) => history.push(to || ROUTES.HOME);
const goToHome = () => navigate();
const goToMovies = () => navigate(ROUTES.MOVIES.MAIN);
const goToPeople = () => navigate(ROUTES.PEOPLE.MAIN);
const goToCountries = () => navigate(ROUTES.COUNTRIES.MAIN);

const UserManagedApp = (props) => {
  const {
    isLoggedIn,
    logInIsFetching,
    userMail,
    userPass,
    logInFromStorage,
    logIn,
    logOut,
    onUserMailChange,
    onUserPassChange
  } = props;

  useEffect(() => {
    logInFromStorage();
  }, []);

  return (
    <Router history={history}>
      <Route
        path={ROUTES.HOME}
        render={() => (
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
              <Container flex={1} layout="center">
                Log in, please.
              </Container>
            )}
          </Container>
        )}
      />
    </Router>
  );
};

const App = (props) => {
  return (
    <LogInManager>
      {(logInManagerProps) => (
        <UserManagedApp {...props} {...logInManagerProps} />
      )}
    </LogInManager>
  );
};

export default App;
