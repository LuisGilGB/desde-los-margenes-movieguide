import React from 'react';
import GridHeader from './GridHeader';
import GridRow from './GridRow';
import {getClassName} from '../../utils';

const DEFAULT_CLASS_NAME = 'dlmmg-grid';

const Grid = props => {
    const {data, columns, className, onItemClick} = props;
    const onRowClick = (item) => {
        return () => {
            onItemClick && onItemClick(item);
        }
    }

    return (
        <table
            className={getClassName(DEFAULT_CLASS_NAME, className)}
        >
            <GridHeader columns={columns} />
            <tbody>
                {data.map((item, index) => (
                    <GridRow
                        key={index}
                        item={item}
                        cells={columns}
                        onClick={onRowClick(item)}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default Grid;