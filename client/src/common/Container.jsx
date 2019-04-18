import React from 'react';
import {getClassName} from '../utils';

const DEFAULT_CLASS_NAME = 'dlmmg-container';

const DEFAULT_CHILD_CLASS_NAME = 'dlmmg-container-item';

const layoutsCfg = {
    auto: {
        contClassName: 'dlmmg-container-auto',
        childClassName: 'dlmmg-container-auto-item'
    },
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

const flexAlignClassNames = {
    start: {
        contClassName: 'dlmng-container-flex-align-start',
        childClassName: 'dlmng-container-flex-align-start-item'
    },
    end: {
        contClassName: 'dlmng-container-flex-align-end',
        childClassName: 'dlmng-container-flex-align-end-item'
    },
    center: {
        contClassName: 'dlmng-container-flex-align-center',
        childClassName: 'dlmng-container-flex-align-center-item'
    },
    stretch: {
        contClassName: 'dlmng-container-flex-align-stretch',
        childClassName: 'dlmng-container-flex-align-stretch-item'
    },
    baseline: {
        contClassName: 'dlmng-container-flex-align-baseline',
        childClassName: 'dlmng-container-flex-align-baseline-item'
    }
}

const getFlexAlignClassName = (align = 'stretch') => flexAlignClassNames[align] || flexAlignClassNames.stretch;

const flexJustifyClassNames = {
    start: {
        contClassName: 'dlmng-container-flex-justify-start',
        childClassName: 'dlmng-container-flex-justify-start-item'
    },
    end: {
        contClassName: 'dlmng-container-flex-justify-end',
        childClassName: 'dlmng-container-flex-justify-end-item'
    },
    center: {
        contClassName: 'dlmng-container-flex-justify-center',
        childClassName: 'dlmng-container-flex-justify-center-item'
    },
    spaceBetween: {
        contClassName: 'dlmng-container-flex-justify-spacebetween',
        childClassName: 'dlmng-container-flex-justify-spacebetween-item'
    },
    spaceAround: {
        contClassName: 'dlmng-container-flex-justify-spacearound',
        childClassName: 'dlmng-container-flex-justify-spacearound-item'
    },
    spaceEvenly: {
        contClassName: 'dlmng-container-flex-justify-spaceevenly',
        childClassName: 'dlmng-container-flex-justify-spaceevenly-item'
    }
}

const getFlexJustifyClassName = (align = 'start') => flexJustifyClassNames[align] || flexJustifyClassNames.start;

// ----------------------------------------------
// Layout className functions
const getLayoutClassName = (layout = 'auto', classNamePointer = 'contClassName') => {
    if (layout && typeof layout === 'string') {
        return (layoutsCfg[layout] || layoutsCfg.auto)[classNamePointer];
    } else if (layout && typeof layout === 'object') {
        const {type = 'auto', align, justify} = layout;
        const typeClassName = (layoutsCfg[type] || layoutsCfg.auto)[classNamePointer];
        const alignClassName = getFlexAlignClassName(align)[classNamePointer];
        const justifyClassName = getFlexJustifyClassName(justify)[classNamePointer];
        return getClassName(typeClassName, alignClassName, justifyClassName);
    }
    return layoutsCfg.auto[classNamePointer];
}

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
        width,
        height,
        flex: flexGrow,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        onClick,
        ...otherProps
    } = props;

    const style = {
        width,
        height,
        flexGrow,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight
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