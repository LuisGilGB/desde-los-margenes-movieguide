import React, {Component} from 'react';
import {setClassNames} from '../utils';

const deafultContainerClassNames = [
    'dlmmg-container'
];

class Container extends Component {
    render () {
        return (
            <div
                className={setClassNames(deafultContainerClassNames, this.props.className)}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Container;