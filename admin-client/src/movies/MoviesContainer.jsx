import React from 'react';
import ROUTES from '../routes';

const MoviesContainer = props => {
    const {
        className,
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
        >
            Movies
        </div>
    );
}

export default MoviesContainer;