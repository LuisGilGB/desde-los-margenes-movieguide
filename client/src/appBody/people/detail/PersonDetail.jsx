import React, {useEffect} from 'react';
import {Container} from '../../../common';

const PersonDetail = props => {
    const {
        personId,
        data = {},
        loadData,
        ...otherProps
    } = props;

    useEffect(() => {
        console.log(personId)
        loadData && loadData(personId)
    }, [personId, loadData]);

    return (
        <Container
            {...otherProps}
        >
        </Container>
    );
}

export default PersonDetail;