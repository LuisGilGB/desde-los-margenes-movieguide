import React from 'react';
import {UserConsumer} from '../UserContext';

const AppHeader = props => {
    const {
        logIn,
        logOut,
        ...otherProps
    } = props;

    return (
        <header>
            <UserConsumer
                {...otherProps}
            >
                This is a header
            </UserConsumer>
        </header>
    );
}

export default AppHeader;