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
            <Container
                layout="fit"
            >
                <Grid
                    data={this.props.movies}
                    className="movies-catalog-grid"
                    columns={[
                        {
                            fieldName: 'title',
                            title: 'Title'
                        },
                        {
                            fieldName: 'directors',
                            title: 'Director'
                        },
                        {
                            fieldName: 'countries',
                            title: 'Country'
                        },
                        {
                            fieldName: 'year',
                            title: 'Year'
                        }
                    ]}
                    onItemClick={this.onMovieClick}
                />
            </Container>
        );
    }
}

export default MoviesCatalog;