import React, {Component} from 'react';
import {Container, Grid} from '../../../common';

class MoviesCatalog extends Component {
    constructor (props) {
        super(props);

        this.onMovieClick = this.onMovieClick.bind(this);
    }

    componentDidMount () {
        this.props.loadMovies();
    }

    onMovieClick (movie = {}) {
        this.props.goToMovieDetail && this.props.goToMovieDetail(movie._id);
    }

    render () {
        return (
            <Container>
                <Grid
                    data={this.props.movies}
                    columns={[
                        {
                            fieldName: '_id',
                            title: 'Id'
                        },
                        {
                            fieldName: 'title',
                            title: 'Title'
                        }
                    ]}
                    onItemClick={this.onMovieClick}
                />
            </Container>
        );
    }
}

export default MoviesCatalog;