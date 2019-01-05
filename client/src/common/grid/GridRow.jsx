import React from 'react';
import {Container} from '..';
import {setClassNames} from '../../utils';

const defaultGridRowClassNames = [
    'dlmmg-grid-row'
];

const GridRow = props => {
    const {item, cells = [], onClick} = props;

    const onRowClick = () => {
        onClick && onClick(item);
    }

    return (
        <Container
            className={setClassNames(defaultGridRowClassNames, props.className)}
            onClick={onRowClick}
        >
            {cells.map(c => (
                <Container>
                    {item[c.fieldName]}
                </Container>
            ))}
        </Container>
    );
}

export default GridRow;