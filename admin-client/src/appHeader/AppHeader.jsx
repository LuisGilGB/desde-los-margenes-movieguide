import React from 'react';
import {UserConsumer} from '../UserContext';
import './AppHeader.css';

const AppHeader = props => {
    const {
        logIn,
        logOut,
        ...otherProps
    } = props;

    return (
        <header
            className="app-header"
        >
            <UserConsumer
                {...otherProps}
            >
                {({user}) => 'This is a header'}
            </UserConsumer>
        </header>
    );
}

export default AppHeader;