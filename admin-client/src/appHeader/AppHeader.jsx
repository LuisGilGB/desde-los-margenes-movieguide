import React from 'react';
import Container from '@luisgilgb/react-container';
import { UserConsumer } from '../UserContext';
import './AppHeader.css';

const AppHeader = (props) => {
  const {
    goToHome,
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
    <header className="app-header">
      <div className="home-btn" onClick={goToHome}>
        ADMIN
      </div>
      <Container className="header-toolbar">
        <UserConsumer {...otherProps}>
          {({ user }) =>
            user ? (
              <Container className="user-info">
                <div className="user-name">{user}</div>
                <button className="logout-btn" onClick={logOut}>
                  Log out
                </button>
              </Container>
            ) : (
              <form
                className="login-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  logIn();
                }}
              >
                <input
                  className="login-input"
                  type="email"
                  placeholder="e-mail"
                  value={userMail}
                  onChange={({ target }) => onUserMailChange(target.value)}
                />
                <input
                  className="login-input"
                  type="password"
                  placeholder="password"
                  value={userPass}
                  onChange={({ target }) => onUserPassChange(target.value)}
                />
                <input className="login-submit" type="submit" value="Log in" />
              </form>
            )
          }
        </UserConsumer>
      </Container>
    </header>
  );
};

export default AppHeader;
