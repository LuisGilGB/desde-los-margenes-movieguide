import React, {useEffect} from 'react';
import {Container} from '../../../common';

const MovieDetail = props => {
    const {
        movieId,
        loadMovieDetail,
        ...containerProps
    } = props;

    useEffect(() => {
        loadMovieDetail && loadMovieDetail(movieId);
    }, [loadMovieDetail, movieId]);

    return (
        <Container
            {...containerProps}
        >
            {`This is the movie ${movieId} detail`}
        </Container>
    );
}

export default MovieDetail;