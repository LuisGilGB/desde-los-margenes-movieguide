import React from 'react';
import {withRouter} from 'react-router-dom';
import {setClassNames} from '../../utils';
import Button from './Button';

const DEFAULT_CLASS_NAMES = [
    'dlmmg-linkbtn'
];

const DEFAULT_BTN_CLASS_NAMES = [
    'dlmmg-linkbtn-btn-el'
];

const LinkButton = props => {
    const {
        children,
        history,
        location,
        match,
        staticContext,
        className = '',
        btnClassName = '',
        to = '/',
        onClick,
        ...rest
    } = props;

    const buttonHandler = event => {
        onClick && onClick(event);
        history.push(to);
    }

    return (
        <Button
            className={setClassNames(DEFAULT_CLASS_NAMES, className)}
            btnClassName={setClassNames(DEFAULT_BTN_CLASS_NAMES, btnClassName)}
            onClick={buttonHandler}
            {...rest}
        >
            {children}
        </Button>
    );
}

export default withRouter(LinkButton);