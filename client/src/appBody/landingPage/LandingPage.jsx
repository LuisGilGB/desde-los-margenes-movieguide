import React, {Component} from 'react';
import {Container, LinkButton} from '../../common';

class LandingPage extends Component {
    render () {
        return (
            <Container
                className="landing-page"
            >
                <LinkButton
                    to="/movies"
                    className="movies-btn"
                >
                    Consult movies catalog
                </LinkButton>
                <LinkButton
                    to="/movies/{:movieId}"
                    className="random-movie-btn"
                >
                    Get a random movie
                </LinkButton>
            </Container>
        );
    }
}

export default LandingPage;