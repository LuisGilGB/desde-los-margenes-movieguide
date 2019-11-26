import React from 'react';
import Container from '@luisgilgb/react-container';
import {LinkButton} from '../common';
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
        <LinkButton to={ROUTES.MOVIES.CATALOG} className="header-navlink-btn movies-btn">
            Películas
        </LinkButton>
        <LinkButton to={ROUTES.PEOPLE.LIST} className="header-navlink-btn people-btn">
            Gente del cine
        </LinkButton>
        {/*<LinkButton to={ROUTES.REGISTER} className="header-navlink-btn register-btn">
            Registro
        </LinkButton>
        <LinkButton to={ROUTES.LOGIN} className="header-navlink-btn login-btn">
            Login
        </LinkButton>*/}
    </Container>
);

export default HeaderToolbar;