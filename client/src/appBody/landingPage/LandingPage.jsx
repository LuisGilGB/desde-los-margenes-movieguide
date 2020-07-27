import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Container from '@luisgilgb/react-container';
import {ROUTES} from '../../routes';
import {actionCreators as navLogicActionCreators} from '../../navigationLogic/navigationLogicActions';
import {actionCreators as moviesActionCreators} from '../movies/moviesActions';
import {Button} from '../../common';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    goToMoviesCatalog: () => dispatch(navLogicActionCreators.navigateWithPush(ROUTES.MOVIES.CATALOG)),
    goToMovieDetail: () => dispatch(navLogicActionCreators.navigateWithPush(ROUTES.MOVIES.DETAIL, { movieId: 'random-movie'})),
    requestRandomMovie: () => dispatch(moviesActionCreators.requestRandomMovie())
});

const LandingPage = props => (
    <Container
        layout="center"
        className="landing-page"
    >
        <Container
            layout="colflex"
        >
            <Button
                className="landing-main-btn movies-btn"
                height={60}
                onClick={props.goToMoviesCatalog}
            >
                Consult movies catalog
            </Button>
            <Button
                className="landing-main-btn random-movie-btn"
                height={60}
                onClick={props.requestRandomMovie}
            >
                Get a random movie
            </Button>
        </Container>
    </Container>
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));