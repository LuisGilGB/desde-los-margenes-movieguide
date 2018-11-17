import React from 'react';
import {withRouter} from 'react-router-dom';
import {setClassNames} from '../../utils';

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

export default withRouter(LinkButton);