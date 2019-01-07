import React, {Component} from 'react';
import {Container} from '../../../common';

class MovieDetail extends Component {
    componentDidMount () {
        this.props.loadMovieDetail(this.props.movieId);
    }

    render () {
        return (
            <Container>
                <div>This is the movie {this.props.movieId} detail</div>
            </Container>
        );
    }
}

export default MovieDetail;