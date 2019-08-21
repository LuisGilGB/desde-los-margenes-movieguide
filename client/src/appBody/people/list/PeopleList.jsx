import React from 'react';
import {Container, Grid} from '../../../common';

const PeopleList = props => {
    const {
        people = [],
        goToPersonDetail = (...params) => console.log(params),
        ...otherProps
    } = props;

    return (
        <Container
            {...otherProps}
            layout="fit"
            className="people-list"
        >
            <Grid
                data={people}
                className="people-list-grid"
                columns={[
                    {
                        fieldName: 'name',
                        title: 'Nombre'
                    }
                ]}
                onItemClick={goToPersonDetail}
            />
        </Container>
    );
}

export default PeopleList;