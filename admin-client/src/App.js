import React from 'react';
import LogInManager from './LogInManager';
import './App.css';

const App = props => {
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
                        <header className="App-header">
                        </header>
                        {isLoggedIn ? (
                            <div>
                                User {currentUser} is logged in with token {token}
                            </div>
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
