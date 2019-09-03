import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {Switch, Route} from 'react-router-dom';
import {Container, LinkButton} from '../../common';
import PeopleListView from './list/PeopleListView';
import PersonDetail from './detail/PersonDetail';
import NewPersonForm from './form/NewPersonForm';
import {actionCreators} from './peopleActions';
import {actionCreators as navLogicActionCreators} from '../../navigationLogic/navigationLogicActions';
import ROUTES from '../../routes';

const PeopleViewport = props => {
    const {
        listData = [],
        loadPeople,
        loadPersonData,
        goToPersonDetail = (...params) => console.log(params)
    } = props;

    const loadPeopleEffect = () => {
        loadPeople && loadPeople();
    }

    useEffect(loadPeopleEffect, []);

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
                    <Route path={ROUTES.PEOPLE.DETAIL} exact render={({match, location, history}) => (
                        <PersonDetail
                            personId={match.params.personId}
                            loadData={loadPersonData}
                        />
                    )} />
                    <Route path={ROUTES.PEOPLE.LIST} render={() => (
                        <PeopleListView
                            people={listData}
                            goToPersonDetail={goToPersonDetail}
                        />
                    )} />
                </Switch>
            </Container>
        </Container>
    );
}

const mapStateToProps = (state, props) => ({
    ...state.people
});

const mapDispatchToProps = (dispatch, props) => ({
    loadPeople: () => dispatch(actionCreators.loadPeople()),
    loadPersonData: (personId) => dispatch(actionCreators.loadPersonData(personId)),
    goToPersonDetail: (personSelected) => dispatch(navLogicActionCreators.navigateWithPush(ROUTES.PEOPLE.DETAIL, personSelected))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PeopleViewport));