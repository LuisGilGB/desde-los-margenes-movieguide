import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container} from '../common';

class AppHeader extends Component {
    render () {
        return (
            <header className="app-header">
                <Container
                    layout="hflex"
                >
                    <div className="app-logo left-item">
                        <Link to='/'>
                            <div className="header-navlink-btn">App</div>
                        </Link>
                    </div>
                    <Container
                        layout="hflex"
                    >
                        <div className="app-header-tools">
                            <div className="register-btn">
                                <Link to='/register'>
                                    <div className="header-navlink-btn">Register</div>
                                </Link>
                            </div>
                            <div className="login-btn">
                                <Link to='/login'>
                                    <div className="header-navlink-btn">Login</div>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </Container>
            </header>
        );
    }
}

export default AppHeader;