import React from 'react';
import { Switch, Route } from 'react-router';
import Container from '@luisgilgb/react-container';
import MoviesContainer from './movies/MoviesContainer';
import PeopleContainer from './people/PeopleContainer';
import CountriesContainer from './countries/CountriesContainer';
import { LandingButton } from '../common';
import ROUTES from '../routes';

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
          <Container {...otherProps}>
            <Container>Go to</Container>
            <LandingButton onClick={goToMovies}>Movies</LandingButton>
            <LandingButton onClick={goToPeople}>People</LandingButton>
            <LandingButton onClick={goToCountries}>Countries</LandingButton>
          </Container>
        )}
      />
    </Switch>
  );
};

export default AppBody;
