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
                                Hola
                            </div>
                        )}
                    </div>
                )}
            }
        </LogInManager>
    );
}

export default App;
