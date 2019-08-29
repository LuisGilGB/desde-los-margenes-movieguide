import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {Switch, Route} from 'react-router-dom';
import {Container, LinkButton} from '../../common';
import PeopleListView from './list/PeopleListView';
import NewPersonForm from './form/NewPersonForm';
import {actionCreators} from './peopleActions';
import {actionCreators as navLogicActionCreators} from '../../navigationLogic/navigationLogicActions';
import ROUTES from '../../routes';

const PeopleViewport = props => {
    const {
        goToPersonDetail = (...params) => console.log(params)
    } = props;

    return (
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
                        <PeopleListView
                            people={[{
                                name: 'Mariano Rajoy Brey'
                            }]}
                            goToPersonDetail={goToPersonDetail}
                        />
                    )} />
                </Switch>
            </Container>
        </Container>
    );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, props) => ({
    loadPeople: () => actionCreators.loadPeople(),
    goToPersonDetail: (personSelected) => navLogicActionCreators.navigateWithPush(ROUTES.PEOPLE.DETAIL, personSelected)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PeopleViewport));