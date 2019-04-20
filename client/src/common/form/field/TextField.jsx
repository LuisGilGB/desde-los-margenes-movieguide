import React from 'react';
import {Container} from '../..';
import {getClassName} from '../../../utils/reactComponentsUtils';

const DEFAULT_CLASS_NAME = 'dlmmg-textfield';

const TextField = props => {
    const {
        value,
        label,
        className = '',
        onChange: onChangeProp,
        ...otherProps
    } = props;

    const onChange = (...args) => {
        onChangeProp && onChangeProp(...args);
    }

    return (
        <Container
            {...otherProps}
            className={getClassName(DEFAULT_CLASS_NAME, className)}
            layout="hflex"
        >
            <label>{label || ''}</label>
            <input
                {...otherProps}
                type="text"
                flex={1}
                value={value}
                onChange={onChange}
            />
        </Container>
    );
}

export default TextField;