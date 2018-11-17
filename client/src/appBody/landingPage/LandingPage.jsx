import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {ROUTES} from '../../routes';
import {actionCreators as navLogicActionCreators} from '../../navigationLogic/navigationLogicActions';
import {Container, Button} from '../../common';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    goToMoviesCatalog: () => dispatch(navLogicActionCreators.navigateWithPush(ownProps.history, ROUTES.MOVIES.CATALOG)),
    goToMovieDetail: () => dispatch(navLogicActionCreators.navigateWithPush(ownProps.history, ROUTES.MOVIES.DETAIL, { movieId: 'random-movie'}))
});

class LandingPage extends Component {
    render () {
        return (
            <Container
                className="landing-page"
            >
                <Button
                    onClick={this.props.goToMoviesCatalog}
                    className="movies-btn"
                >
                    Consult movies catalog
                </Button>
                <Button
                    onClick={this.props.goToMovieDetail}
                    className="random-movie-btn"
                >
                    Get a random movie
                </Button>
            </Container>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));