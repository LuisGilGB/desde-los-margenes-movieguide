import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from '../common';

const HeaderToolbar = props => (
    <Container
        layout="hflex"
        {...props}
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
);

export default HeaderToolbar;