import React, {Component} from 'react';
import {Container} from '../../../common';

class MoviesCatalog extends Component {
    componentDidMount () {
        this.props.loadMovies();
    }

    render () {
        return (
            <Container>
                This is the movies catalog
            </Container>
        );
    }
}

export default MoviesCatalog;