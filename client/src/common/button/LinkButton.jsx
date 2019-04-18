import React from 'react';
import {withRouter} from 'react-router-dom';
import {getClassName} from '../../utils';
import Button from './Button';

const DEFAULT_CLASS_NAME = 'dlmmg-linkbtn';

const DEFAULT_BTN_CLASS_NAME = 'dlmmg-linkbtn-btn-el';

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
            className={getClassName(DEFAULT_CLASS_NAME, className)}
            btnClassName={getClassName(DEFAULT_BTN_CLASS_NAME, btnClassName)}
            onClick={buttonHandler}
            {...rest}
        >
            {children}
        </Button>
    );
}

export default withRouter(LinkButton);