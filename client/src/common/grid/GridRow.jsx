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
        <tr
            className={setClassNames(defaultGridRowClassNames, props.className)}
            onClick={onRowClick}
        >
            {cells.map(c => (
                <td
                        key={c.fieldName}
                >
                    <GridCell
                        value={item[c.fieldName]}
                    />
                </td>
            ))}
        </tr>
    );
}

export default GridRow;