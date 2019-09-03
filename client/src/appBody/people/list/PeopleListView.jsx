import React from 'react';
import {Container} from '../../../common';
import PeopleList from './PeopleList';

const PeopleListView = props => {
    const {
        people = [],
        goToPersonDetail,
        ...otherProps
    } = props;

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