import React from 'react';
import {Container, LinkButton} from '../common';
import ROUTES from '../routes';

const HeaderToolbar = props => (
    <Container
        layout={{
            type: 'hflex',
            justify: 'end'
        }}
        className="header-toolbar"
        {...props}
    >
        <LinkButton to={ROUTES.PEOPLE} className="header-navlink-btn people-btn">
            Gente del cine
        </LinkButton>
        <LinkButton to={ROUTES.REGISTER} className="header-navlink-btn register-btn">
            Register
        </LinkButton>
        <LinkButton to={ROUTES.LOGIN} className="header-navlink-btn login-btn">
            Login
        </LinkButton>
    </Container>
);

export default HeaderToolbar;