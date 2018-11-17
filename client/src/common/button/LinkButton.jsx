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
        history,
        children,
        className = '',
        btnClassName = '',
        to = '/',
        ...rest
    } = props;

    const navigate = event => {
        history.push(to);
    }

    return (
        <div className={setClassNames(DEFAULT_CLASS_NAMES, className)} {...rest}>
            <button
                className={setClassNames(DEFAULT_BTN_CLASS_NAMES, btnClassName)}
                onClick={navigate}
            >
                {children}
            </button>
        </div>
    );
}

export default withRouter(LinkButton);