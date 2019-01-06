import React from 'react';
import {Container} from '..';
import GridRow from './GridRow';
import {setClassNames} from '../../utils';

const defaultGridClassNames = [
    'dlmmg-grid'
];

const Grid = props => {
    const onRowClick = (item) => {
        return () => {
            props.onItemClick && props.onItemClick(item);
        }
    }

    return (
        <table
            className={setClassNames(defaultGridClassNames, props.className)}
        >
            <tbody>
                {props.data.map((item, index) => (
                    <GridRow
                        key={index}
                        item={item}
                        cells={props.columns}
                        onClick={onRowClick(item)}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default Grid;