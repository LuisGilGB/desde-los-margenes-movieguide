import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container} from '../../common';

class LandingPage extends Component {
    render () {
        return (
            <Container
                className="landing-page"
            >
                <div className="movies-btn">
                    <Link to='/movies'>
                        <div className="header-navlink-btn">Consult movies catalog</div>
                    </Link>
                </div>
                <div className="random-movie-btn">
                    <Link to='/movies/{:movieId}'>
                        <div className="header-navlink-btn">Get a random movie</div>
                    </Link>
                </div>
            </Container>
        );
    }
}

export default LandingPage;