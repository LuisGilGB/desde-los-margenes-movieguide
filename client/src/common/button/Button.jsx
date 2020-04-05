import React from 'react';
import {Container} from '@luisgilgb/react-container';
import {getClassName} from '../../utils';

const DEFAULT_CLASS_NAME = 'dlmmg-btn';

const DEFAULT_BTN_CLASS_NAME = 'dlmmg-btn-btn-el';

const Button = props => {
    const {
        children,
        className = '',
        btnClassName = '',
        onClick,
        ...rest
    } = props;

    const buttonHandler = event => {
        onClick && onClick(event);
    }

    return (
        <Container className={getClassName(DEFAULT_CLASS_NAME, className)} {...rest} layout="fit">
            <button
                className={getClassName(DEFAULT_BTN_CLASS_NAME, btnClassName)}
                onClick={buttonHandler}
            >
                {children}
            </button>
        </Container>
    );
}

export default Button;