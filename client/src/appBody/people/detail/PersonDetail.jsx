import React from 'react';
import {Container} from '../../../../common';

const PersonDetail = props => {
    const {
        personId,
        data = {},
        loadData,
        ...otherProps
    } = props;

    return (
        <Container
            {...otherProps}
        >
        </Container>
    );
}

export default PersonDetail;