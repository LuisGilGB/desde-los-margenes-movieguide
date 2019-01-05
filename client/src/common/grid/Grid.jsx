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
        <Container
            className={setClassNames(defaultGridClassNames, props.className)}
        >
            {props.data.map((item, index) => (
                <GridRow
                    key={index}
                    item={item}
                    cells={props.columns}
                    onClick={onRowClick(item)}
                />
            ))}
        </Container>
    );
}

export default Grid;