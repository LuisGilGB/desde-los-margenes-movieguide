import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {Container} from '../../common';
import MoviesCatalogContainer from './catalog/MoviesCatalogContainer';
import MovieDetailContainer from './detail/MovieDetailContainer';
import {ROUTES} from '../../routes';

const MoviesViewport = props => (
    <Container>
        <Switch>
            <Route path={ROUTES.MOVIES.DETAIL} render={() => (
                <MovieDetailContainer />
            )} />
            <Route path={ROUTES.MOVIES.CATALOG} render={() => (
                <MoviesCatalogContainer />
            )} />
        </Switch>
    </Container>
);

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesViewport);