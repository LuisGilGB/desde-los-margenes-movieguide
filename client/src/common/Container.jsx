import React, {Component} from 'react';
import {setClassNames} from '../utils';

const deafultContainerClassNames = [
    'dlmmg-container'
];

const layoutsCfg = {
    fit: {
        contClassName: 'dlmmg-container-fit',
        childClassName: 'dlmmg-container-fit-item'
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

const getLayoutChildClassName = (layout = '') => (layoutsCfg[layout] ? layoutsCfg[layout].childClassName : '');

const addLayoutChildClassName = (layout = '', prevClassName = '') => `${prevClassName} ${getLayoutChildClassName(layout)}`.trim();

const mapClassName = layout => props => {
    const className = addLayoutChildClassName(layout, props.className);

    return className ? { className } : {}
}

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

class Container extends Component {
    render () {
        const { className, onClick, children, layout, ...otherProps } = this.props;
        return (
            <div
                className={setClassNames(deafultContainerClassNames, className)}
                onClick={onClick}
                {...otherProps}
            >
                {Array.isArray(children) ?
                    children.map(child => mapChild(child, mapClassName(layout))) :
                    (typeof children === 'object' ? mapChild(children, mapClassName(layout)) : children)
                }
            </div>
        );
    }
}

export default Container;