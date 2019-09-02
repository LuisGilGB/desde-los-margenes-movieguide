import React, {useEffect} from 'react';
import {Container} from '../../../common';
import PeopleList from './PeopleList';

const PeopleListView = props => {
    const {
        people = [],
        loadPeople,
        goToPersonDetail,
        ...otherProps
    } = props;

    useEffect(() => {
        loadPeople && loadPeople();
    }, [])

    return (
        <Container
            {...otherProps}
            layout="fit"
            className="people-list-view"
        >
            <PeopleList
                data={people}
                onItemClick={goToPersonDetail}
            />
        </Container>
    );
}

export default PeopleListView;