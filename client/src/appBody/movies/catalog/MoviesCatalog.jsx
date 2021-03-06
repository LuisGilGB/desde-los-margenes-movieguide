import React, {useEffect} from 'react';
import Container from '@luisgilgb/react-container';
import {Grid} from '../../../common';

const MoviesCatalog = props => {
    const {
        movies = [],
        loadMovies,
        goToMovieDetail,
        ...containerProps
    } = props;

    const loadMoviesEffect = () => {
        loadMovies && loadMovies();
    }

    useEffect(loadMoviesEffect, []);

    const onMovieClick = (movie = {}) => goToMovieDetail && goToMovieDetail(movie.movieId);

    return (
        <Container
            layout="fit"
            {...containerProps}
        >
            <Grid
                data={movies}
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
                onItemClick={onMovieClick}
            />
        </Container>
    );
}

export default MoviesCatalog;