import React from 'react';
import GridCell from './GridCell';
import {setClassNames} from '../../utils';

const defaultGridHeaderClassNames = [
    'dlmmg-grid-header'
];

const GridHeader = props => {
    const {columns = []} = props;

    return (
        <thead>
            <tr
                className={setClassNames(defaultGridHeaderClassNames, props.className)}
            >
                {columns.map(c => (
                    <td
                            key={c.fieldName}
                    >
                        <GridCell
                            value={c.title}
                        />
                    </td>
                ))}
            </tr>
        </thead>
    );
}

export default GridHeader;