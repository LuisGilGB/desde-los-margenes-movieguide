import React, {Component} from 'react';
import {Container} from '@luisgilgb/react-container';
import {LinkButton} from '../common';
import HeaderToolbar from './HeaderToolbar'

class AppHeader extends Component {
    render () {
        return (
            <header className="app-header">
                <Container
                    className="app-header-body"
                    height={50}
                    layout="rowflex"
                >
                    <LinkButton to="/" className="app-logo left-item" width={100}>
                        App
                    </LinkButton>
                    <HeaderToolbar
                        flex={1}
                    />
                </Container>
            </header>
        );
    }
}

export default AppHeader;