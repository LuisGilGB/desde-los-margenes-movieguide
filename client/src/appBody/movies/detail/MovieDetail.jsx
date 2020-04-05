import React, {useEffect} from 'react';
import {Container} from '@luisgilgb/react-container';

const MovieDetail = props => {
    const {
        movieId,
        loadMovieDetail,
        ...containerProps
    } = props;

    const loadMovieDetailEffect = () => loadMovieDetail && loadMovieDetail(movieId);

    useEffect(() => {
        loadMovieDetailEffect(movieId);
    }, [movieId]);

    return (
        <Container
            {...containerProps}
        >
            {`This is the movie ${movieId} detail`}
        </Container>
    );
}

export default MovieDetail;