import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {Container} from '../../common';
import MoviesCatalog from './catalog/MoviesCatalog';
import MovieDetail from './detail/MovieDetail';
import {ROUTES} from '../../routes';

const MoviesViewport = props => (
    <Container>
        <Switch>
            <Route path={ROUTES.MOVIES.DETAIL} render={() => (
                <MovieDetail />
            )} />
            <Route path={ROUTES.MOVIES.CATALOG} render={() => (
                <MoviesCatalog />
            )} />
        </Switch>
    </Container>
);

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesViewport);