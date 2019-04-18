import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {Switch, Route} from 'react-router-dom';
import {Container} from '../../common';
import ROUTES from '../../routes';

const PeopleViewport = props => (
    <Container layout="center">
        Lista de gente
    </Container>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PeopleViewport));