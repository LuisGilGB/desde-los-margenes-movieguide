import React from 'react';
import {getClassName} from '../utils';

const DEFAULT_CLASS_NAME = 'dlmmg-container';

const DEFAULT_CHILD_CLASS_NAME = 'dlmmg-container-item';

const layoutsCfg = {
    fit: {
        contClassName: 'dlmmg-container-fit',
        childClassName: 'dlmmg-container-fit-item'
    },
    center: {
        contClassName: 'dlmmg-container-center',
        childClassName: 'dlmmg-container-center-item'
    },
    vflex: {
        contClassName: 'dlmmg-container-vflex',
        childClassName: 'dlmmg-container-vflex-item'
    },
    hflex: {
        contClassName: 'dlmmg-container-hflex',
        childClassName: 'dlmmg-container-hflex-item'
    }
}

// ----------------------------------------------
// Layout className functions
const getLayoutClassName = (layout = '', classNamePointer = 'contClassName') => (layoutsCfg[layout] ? layoutsCfg[layout][classNamePointer] : '');

const getLayoutContainerClassName = (layout) => getLayoutClassName(layout);

const getLayoutChildClassName = (layout) => getLayoutClassName(layout, 'childClassName');
// ----------------------------------------------

// ----------------------------------------------
// Component className functions
const getCmpClassName = (layout, customClassName, mainClassName = DEFAULT_CLASS_NAME, layoutGetter = getLayoutContainerClassName) => getClassName(mainClassName, layoutGetter(layout), customClassName);

const getContainerClassName = (layout, customClassName) => getCmpClassName(layout, customClassName);

const getChildClassName = (layout, customClassName) => getCmpClassName(layout, customClassName, DEFAULT_CHILD_CLASS_NAME, getLayoutChildClassName);
// ----------------------------------------------

// ----------------------------------------------
// Mappers for container children
const mapChildClassName = layout => props => ({ className: getChildClassName(layout, props.className) })

const mapChild = (childCmp, propsMapper) => {
    const childProps = typeof childCmp.props === 'object' ? {
            ...childCmp.props,
            ...propsMapper(childCmp.props)
        } : childCmp.props;

    return {
        ...childCmp,
        props: childProps
    }
}
// ----------------------------------------------

const Container = props => {
    const {
        children,
        className,
        layout,
        flex,
        onClick,
        ...otherProps
    } = props;

    const style = {
        flexGrow: flex
    }

    return (
        <div
            className={getContainerClassName(layout, className)}
            onClick={onClick}
            {...otherProps}
            style={style}
        >
            {Array.isArray(children) ?
                children.map(child => mapChild(child, mapChildClassName(layout))) :
                (typeof children === 'object' ? mapChild(children, mapChildClassName(layout)) : children)
            }
        </div>
    );
}

export default Container;