import React from 'react';
import {Container} from '..';
import {setClassNames} from '../../utils';

const defaultGridCellClassNames = [
    'dlmmg-grid-cell'
];

const GridCell = props => {
    const {value, onClick} = props;
    const onCellClick = () => {
        onClick && onClick(value);
    }

    return (
        <Container
            className={setClassNames(defaultGridCellClassNames, props.className)}
            onClick={onCellClick}
        >
            {value}
        </Container>
    );
}

export default GridCell;