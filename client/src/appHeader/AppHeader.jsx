import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container} from '../common';
import HeaderToolbar from './HeaderToolbar'

class AppHeader extends Component {
    render () {
        return (
            <header className="app-header">
                <Container
                    className="app-header-body"
                    layout="hflex"
                >
                    <div className="app-logo left-item">
                        <Link to='/'>
                            <div className="header-navlink-btn">App</div>
                        </Link>
                    </div>
                    <HeaderToolbar
                        flex={1}
                    />
                </Container>
            </header>
        );
    }
}

export default AppHeader;