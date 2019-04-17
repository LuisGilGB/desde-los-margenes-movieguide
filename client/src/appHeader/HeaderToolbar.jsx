import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from '../common';

const HeaderToolbar = props => (
    <Container
        layout={{
            type: 'hflex',
            justify: 'end'
        }}
        className="header-toolbar"
        {...props}
    >
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
    </Container>
);

export default HeaderToolbar;