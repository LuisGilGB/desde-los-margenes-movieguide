import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {Switch, Route} from 'react-router-dom';
import {Container} from '../../common';
import MoviesCatalogContainer from './catalog/MoviesCatalogContainer';
import MovieDetailContainer from './detail/MovieDetailContainer';
import {actionCreators as navLogicActionCreators} from '../../navigationLogic/navigationLogicActions';
import {actionCreators} from './moviesActions';
import ROUTES from '../../routes';

const MoviesViewport = props => (
    <Container
        layout="fit"
    >
        <Switch>
            <Route path={ROUTES.MOVIES.DETAIL} render={({match}) => (
                <MovieDetailContainer
                    movieId={match.params.movieId}
                    loadMovieDetail={props.loadMovieDetail}
                />
            )} />
            <Route path={ROUTES.MOVIES.CATALOG} render={() => (
                <MoviesCatalogContainer
                    movies={props.movies}
                    goToMovieDetail={props.goToMovieDetail}
                    loadMovies={props.loadMovies}
                />
            )} />
        </Switch>
    </Container>
);

const mapStateToProps = (state, props) => {
    const {movies: {movies}} = state;
    return {
        movies
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    goToMovieDetail: movieId => dispatch(navLogicActionCreators.navigateWithPush(props.history, ROUTES.MOVIES.DETAIL, { movieId })),
    loadMovies: () => dispatch(actionCreators.loadMovies()),
    loadMovieDetail: movieId => dispatch(actionCreators.loadMovieDetail(movieId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesViewport));