import React from 'react';
import LogInManager from './LogInManager';
import AppHeader from './appHeader/AppHeader';
import {UserConsumer} from './UserContext';
import './App.css';

const App = props => {
    const goToHome = () => console.log('Go to home');

    return (
        <LogInManager>
            {(logInManagerProps) => {
                const {
                    isLoggedIn,
                    logInIsFetching,
                    userMail,
                    userPass,
                    currentUser,
                    token,
                    logIn,
                    logOut,
                    onUserMailChange,
                    onUserPassChange
                } = logInManagerProps;

                return (
                    <div className="App">
                        <AppHeader
                            goToHome={goToHome}
                            logInIsFetching={logInIsFetching}
                            userMail={userMail}
                            userPass={userPass}
                            logIn={logIn}
                            logOut={logOut}
                            onUserMailChange={onUserMailChange}
                            onUserPassChange={onUserPassChange}
                        />
                        {isLoggedIn ? (
                            <UserConsumer>
                                {userProps => (<div>
                                    User {userProps.currentUser} is logged in with token {userProps.token}
                                </div>)}
                            </UserConsumer>
                        ) : (
                            <div>
                                <form
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
                            </div>
                        )}
                    </div>
                )}
            }
        </LogInManager>
    );
}

export default App;
