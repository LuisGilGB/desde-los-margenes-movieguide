import React from 'react';
import GridCell from './GridCell';
import {getClassName} from '../../utils';

const DEFAULT_CLASS_NAME = 'dlmmg-grid-row';

const GridRow = props => {
    const {item, cells = [], onClick} = props;

    const onRowClick = () => {
        onClick && onClick(item);
    }

    return (
        <tr
            className={getClassName(DEFAULT_CLASS_NAME, props.className)}
            onClick={onRowClick}
        >
            {cells.map(c => (
                <GridCell
                    key={c.fieldName}
                    value={item[c.fieldName]}
                />
            ))}
        </tr>
    );
}

export default GridRow;