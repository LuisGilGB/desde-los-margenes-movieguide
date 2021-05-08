/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router';
import Container from '@luisgilgb/react-container';
import PropTypes from 'prop-types';
import MoviesContainer from './movies/MoviesContainer';
import PeopleContainer from './people/PeopleContainer';
import CountriesContainer from './countries/CountriesContainer';
import ROUTES from './routes';

const AppBody = (props) => {
  const { goToMovies, goToPeople, goToCountries, ...otherProps } = props;

  return (
    <Switch>
      <Route path={ROUTES.MOVIES.MAIN} render={() => <MoviesContainer />} />
      <Route path={ROUTES.PEOPLE.MAIN} render={() => <PeopleContainer />} />
      <Route
        path={ROUTES.COUNTRIES.MAIN}
        render={() => <CountriesContainer />}
      />
      <Route
        path={ROUTES.HOME}
        render={() => (
          <Container {...otherProps} data-testid="app-body">
            <Container>Go to</Container>
            <Container data-testid="app-body-movies-link" onClick={goToMovies}>
              Movies
            </Container>
            <Container data-testid="app-body-people-link" onClick={goToPeople}>
              People
            </Container>
            <Container
              data-testid="app-body-countries-link"
              onClick={goToCountries}
            >
              Countries
            </Container>
          </Container>
        )}
      />
    </Switch>
  );
};

AppBody.propTypes = {
  goToMovies: PropTypes.func.isRequired,
  goToPeople: PropTypes.func.isRequired,
  goToCountries: PropTypes.func.isRequired,
};

export default AppBody;
