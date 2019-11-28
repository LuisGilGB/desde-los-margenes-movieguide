import React, {useEffect} from 'react';
import {Container} from '@luisgilgb/react-container';

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
    }, [personId]);

    return (
        <Container
            {...otherProps}
        >
        </Container>
    );
}

export default PersonDetail;