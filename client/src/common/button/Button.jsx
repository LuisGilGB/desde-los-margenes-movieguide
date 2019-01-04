import React from 'react';
import {setClassNames} from '../../utils';

const DEFAULT_CLASS_NAMES = [
    'dlmmg-btn'
];

const DEFAULT_BTN_CLASS_NAMES = [
    'dlmmg-btn-btn-el'
];

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
        <div className={setClassNames(DEFAULT_CLASS_NAMES, className)} {...rest}>
            <button
                className={setClassNames(DEFAULT_BTN_CLASS_NAMES, btnClassName)}
                onClick={buttonHandler}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;