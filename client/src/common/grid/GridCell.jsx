import React from 'react';
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
        <td
            className={setClassNames(defaultGridCellClassNames, props.className)}
            onClick={onCellClick}
        >
            {value}
        </td>
    );
}

export default GridCell;