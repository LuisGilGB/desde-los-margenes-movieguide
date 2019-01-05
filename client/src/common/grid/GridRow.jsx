import React from 'react';
import {Container} from '..';
import GridCell from './GridCell';
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
                <GridCell
                    key={c.fieldName}
                    value={item[c.fieldName]}
                />
            ))}
        </Container>
    );
}

export default GridRow;