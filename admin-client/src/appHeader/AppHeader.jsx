import React from 'react';
import {UserConsumer} from '../UserContext';
import './AppHeader.css';

const AppHeader = props => {
    const {
        logInIsFetching,
        userMail,
        userPass,
        logIn,
        logOut,
        onUserMailChange,
        onUserPassChange,
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
                    {({user}) => user ? <div>{user}</div> : (
                        <form
                            className="login-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                logIn();
                            }}
                        >
                            <input
                                type="email"
                                value={userMail}
                                onChange={({target}) => onUserMailChange(target.value)}
                            />
                            <input
                                type="password"
                                value={userPass}
                                onChange={({target}) => onUserPassChange(target.value)}
                            />
                            <input
                                type="submit"
                                value="Log in"
                            />
                        </form>
                    )}
                </UserConsumer>
            </div>
        </header>
    );
}

export default AppHeader;