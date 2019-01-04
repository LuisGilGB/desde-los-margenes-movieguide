import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {Container} from '../../common';
import MoviesCatalogContainer from './catalog/MoviesCatalogContainer';
import MovieDetailContainer from './detail/MovieDetailContainer';
import {actionCreators} from './moviesActions';
import {ROUTES} from '../../routes';

const MoviesViewport = props => (
    <Container>
        <Switch>
            <Route path={ROUTES.MOVIES.DETAIL} render={({match}) => (
                <MovieDetailContainer
                    movieId={match.params.movieId}
                    loadMovieDetail={props.loadMovieDetail}
                />
            )} />
            <Route path={ROUTES.MOVIES.CATALOG} render={() => (
                <MoviesCatalogContainer loadMovies={props.loadMovies} />
            )} />
        </Switch>
    </Container>
);

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
    loadMovies: () => dispatch(actionCreators.loadMovies()),
    loadMovieDetail: movieId => dispatch(actionCreators.loadMovieDetail(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesViewport);