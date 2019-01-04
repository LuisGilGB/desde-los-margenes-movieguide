import React, {Component} from 'react';
import {Container} from '../../../common';

class MoviesCatalog extends Component {
    componentDidMount () {
        this.props.loadMovies();
    }

    render () {
        return (
            <Container>
                {this.props.movies.map(m => (<div>Movie {m._id}</div>))}
            </Container>
        );
    }
}

export default MoviesCatalog;