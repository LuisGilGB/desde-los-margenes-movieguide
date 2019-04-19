import React from 'react';
import {Container, Grid} from '../../../common';

const PeopleList = props => {
    const {
        people = [],
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
            />
        </Container>
    );
}

export default PeopleList;