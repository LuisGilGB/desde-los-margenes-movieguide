import React from 'react';
import {Container, LinkButton} from '../common';

const HeaderToolbar = props => (
    <Container
        layout={{
            type: 'hflex',
            justify: 'end'
        }}
        className="header-toolbar"
        {...props}
    >
        <LinkButton to="/register" className="header-navlink-btn register-btn">
            Register
        </LinkButton>
        <LinkButton to="/login" className="header-navlink-btn login-btn">
            Login
        </LinkButton>
    </Container>
);

export default HeaderToolbar;