import React, {useEffect} from 'react';
import {Container} from '../../../common';

const PersonDetail = props => {
    const {
        personId,
        data = {},
        loadData,
        ...otherProps
    } = props;

    const loadDataEffect = id => loadData && loadData(id)

    useEffect(() => {
        loadDataEffect(personId);
    }, [loadData]);

    return (
        <Container
            {...otherProps}
        >
        </Container>
    );
}

export default PersonDetail;