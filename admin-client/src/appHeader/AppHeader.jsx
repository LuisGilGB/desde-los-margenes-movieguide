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
            <div
                className="home-btn"
            >
                ADMIN
            </div>
            <div
                className="header-toolbar"
            >
                <UserConsumer
                    {...otherProps}
                >
                    {({user}) => 'This is a header'}
                </UserConsumer>
            </div>
        </header>
    );
}

export default AppHeader;