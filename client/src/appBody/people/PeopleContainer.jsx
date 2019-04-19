import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {Switch, Route} from 'react-router-dom';
import {Container, LinkButton} from '../../common';
import PeopleList from './list/PeopleList';
import NewPersonForm from './form/NewPersonForm.jsx'
import ROUTES from '../../routes';

const PeopleViewport = props => (
    <Container layout="vflex">
        <Container
            height={40}
            layout={{
                type: 'hflex',
                justify: 'end'
            }}
        >
            <LinkButton
                to={ROUTES.PEOPLE.NEW_PERSON_FORM}
            >
                Add person
            </LinkButton>
        </Container>
        <Container
            flex={1}
            layout="fit"
        >
            <Switch>
                <Route path={ROUTES.PEOPLE.NEW_PERSON_FORM} exact render={() => (
                    <NewPersonForm
                        data={{}}
                    />
                )} />
                <Route path={ROUTES.PEOPLE.LIST} render={() => (
                    <PeopleList
                        people={[{
                            name: 'Mariano Rajoy Brey'
                        }]}
                    />
                )} />
            </Switch>
        </Container>
    </Container>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PeopleViewport));