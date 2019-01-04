import React from 'react';
import {Container} from '..';
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
            {props.data.map((item, index) => (<div key={index} onClick={onRowClick(item)}>{item.title}</div>))}
        </Container>
    );
}

export default Grid;