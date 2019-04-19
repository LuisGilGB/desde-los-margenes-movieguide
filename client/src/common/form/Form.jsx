import React from 'react';
import {Container} from '..';
import {getClassName} from '../../utils';

const DEFAULT_CLASS_NAME = 'dlmmg-form';

const DEFAULT_INNERCONT_CLASS_NAME = 'dlmmg-form-innercont';

const Form = props => {
    const {
        children,
        layout,
        className,
        innerClassName,
        onSubmit: onSubmitProp,
        ...otherProps
    } = props;

    const onSubmit = (e, ...args) => {
        e.preventDefault();
        onSubmitProp && onSubmitProp(e, ...args);
    }

    return (
            <form
                {...otherProps}
                className={getClassName(DEFAULT_CLASS_NAME, className)}
                onSubmit={onSubmit}
            >
                <Container
                    className={getClassName(DEFAULT_INNERCONT_CLASS_NAME, innerClassName)}
                    layout={layout}
                >
                    {children}
                </Container>
            </form>
    );
}

export default Form;