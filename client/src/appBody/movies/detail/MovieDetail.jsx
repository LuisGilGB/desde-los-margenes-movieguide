import React, {Component} from 'react';
import {Container} from '../../../common';

class MovieDetail extends Component {
    componentDidMount () {
        this.props.loadMovieDetail(this.props.movieId);
    }

    render () {
        return (
            <Container>
                This is the movie {this.props.movieId} detail
            </Container>
        );
    }
}

export default MovieDetail;