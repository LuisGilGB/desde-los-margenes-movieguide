import React from 'react';
import GridCell from './GridCell';
import {getClassName} from '../../utils';

const DEFAULT_CLASS_NAME = 'dlmmg-grid-header';

const GridHeader = props => {
    const {columns = []} = props;

    return (
        <thead>
            <tr
                className={getClassName(DEFAULT_CLASS_NAME, props.className)}
            >
                {columns.map(c => (
                    <GridCell
                        key={c.fieldName}
                        value={c.title}
                    />
                ))}
            </tr>
        </thead>
    );
}

export default GridHeader;