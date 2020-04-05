import React from 'react';
import ROUTES from '../routes';

const CountriesContainer = props => {
    const {
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
        >
            Countries
        </div>
    );
}

export default CountriesContainer;