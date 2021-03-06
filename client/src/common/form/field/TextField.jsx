import React from 'react';
import Container from '@luisgilgb/react-container';
import {getClassName} from '../../../utils/reactComponentsUtils';

const DEFAULT_CLASS_NAME = 'dlmmg-field dlmmg-textfield';

const DEFAULT_LABEL_CLASS_NAME = 'dlmmg-field-label';

const DEFAULT_INPUT_CLASS_NAME = 'dlmmg-field-input dlmmg-field-input-text';

const TextField = props => {
    const {
        value,
        label = '',
        className = '',
        labelClassName = '',
        inputClassName = '',
        flex: flexGrow,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        labelWidth,
        inputWidth,
        onChange: onChangeProp,
        ...otherProps
    } = props;

    const onChange = (e) => {
        const newValue = e.target.value;
        const oldValue = value;
        onChangeProp && onChangeProp(props, newValue, oldValue, e);
    }

    return (
        <Container
            className={getClassName(DEFAULT_CLASS_NAME, className)}
            layout="rowflex"
            style={{
                flexGrow,
                width,
                minWidth,
                maxWidth,
                height,
                minHeight,
                maxHeight
            }}
        >
            <label
                className={getClassName(DEFAULT_LABEL_CLASS_NAME, labelClassName)}
                style={{
                    width: labelWidth
                }}
            >
                {label}
            </label>
            <input
                {...otherProps}
                type="text"
                className={getClassName(DEFAULT_INPUT_CLASS_NAME, inputClassName)}
                value={value}
                onChange={onChange}
            />
        </Container>
    );
}

export default TextField;