import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {Switch, Route} from 'react-router-dom';
import {Container} from '../../common';
import PeopleList from './list/PeopleList';
import ROUTES from '../../routes';

const PeopleViewport = props => (
    <Container layout="fit">
        <Switch>
            <Route path={ROUTES.PEOPLE.LIST} render={() => (
                <PeopleList
                    people={[{
                        name: 'Mariano Rajoy Brey'
                    }]}
                />
            )} />
        </Switch>
    </Container>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PeopleViewport));