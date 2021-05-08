/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Container from '@luisgilgb/react-container';
import PropTypes from 'prop-types';
import { UserConsumer } from '../UserContext';
import './AppHeader.css';

const AppHeader = (props) => {
  const {
    userMail,
    userPass,
    goToHome,
    logIn,
    logOut,
    onUserMailChange,
    onUserPassChange,
    ...otherProps
  } = props;

  return (
    <header className="app-header">
      <div
        className="home-btn"
        role="button"
        tabIndex={0}
        data-testid="app-header-logo"
        onClick={goToHome}
        onKeyPress={goToHome}
      >
        ADMIN
      </div>
      <Container className="header-toolbar">
        <UserConsumer {...otherProps}>
          {({ user }) =>
            user ? (
              <Container className="user-info">
                <div className="user-name">{user}</div>
                <button
                  type="button"
                  className="logout-btn"
                  data-testid="logout-button"
                  onClick={logOut}
                >
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
                  data-testid="login-input"
                  onChange={({ target }) => onUserMailChange(target.value)}
                />
                <input
                  className="login-input"
                  type="password"
                  placeholder="password"
                  value={userPass}
                  data-testid="login-password"
                  onChange={({ target }) => onUserPassChange(target.value)}
                />
                <button
                  className="login-submit"
                  type="submit"
                  data-testid="login-submit"
                >
                  Log in
                </button>
              </form>
            )
          }
        </UserConsumer>
      </Container>
    </header>
  );
};

AppHeader.propTypes = {
  userMail: PropTypes.string,
  userPass: PropTypes.string,
  goToHome: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  onUserMailChange: PropTypes.func.isRequired,
  onUserPassChange: PropTypes.func.isRequired,
};

AppHeader.defaultProps = {
  userMail: '',
  userPass: '',
};

export default AppHeader;
