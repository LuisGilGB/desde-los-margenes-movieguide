import React from 'react';
import {Container} from '..';
import GridHeader from './GridHeader';
import GridRow from './GridRow';
import {setClassNames} from '../../utils';

const defaultGridClassNames = [
    'dlmmg-grid'
];

const Grid = props => {
    const {data, columns, className, onItemClick} = props;
    const onRowClick = (item) => {
        return () => {
            onItemClick && onItemClick(item);
        }
    }

    return (
        <table
            className={setClassNames(defaultGridClassNames, className)}
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