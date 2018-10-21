import React, {Component} from 'react';
import {setClassNames} from '../utils';

const deafultContainerClassNames = [
    'lggb-container'
];

class Container extends Component {
    render () {
        return (
            <div
                className={setClassNames(deafultContainerClassNames, this.props)}
            >
                {...this.props.children}
            </div>
        );
    }
}

export default Container;