import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {ROUTES} from '../../routes';
import {actionCreators as navLogicActionCreators} from '../../navigationLogic/navigationLogicActions';
import {actionCreators as moviesActionCreators} from '../movies/moviesActions';
import {Container, Button} from '../../common';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    goToMoviesCatalog: () => dispatch(navLogicActionCreators.navigateWithPush(ownProps.history, ROUTES.MOVIES.CATALOG)),
    goToMovieDetail: () => dispatch(navLogicActionCreators.navigateWithPush(ownProps.history, ROUTES.MOVIES.DETAIL, { movieId: 'random-movie'})),
    requestRandomMovie: () => dispatch(moviesActionCreators.requestRandomMovie(ownProps.history))
});

const LandingPage = props => (
    <Container
        className="landing-page"
    >
        <Button
            onClick={props.goToMoviesCatalog}
            className="movies-btn"
        >
            Consult movies catalog
        </Button>
        <Button
            onClick={props.requestRandomMovie}
            className="random-movie-btn"
        >
            Get a random movie
        </Button>
    </Container>
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));