import React from 'react';
import ROUTES from '../routes';

const PeopleContainer = props => {
    const {
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
        >
            People
        </div>
    );
}

export default PeopleContainer;