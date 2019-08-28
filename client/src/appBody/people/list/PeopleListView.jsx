import React, {Component} from 'react';
import {Container} from '../../../common';
import PeopleList from './PeopleList';

class PeopleListView extends Component {
    componentDidMount () {}

    render () {
        const {
            people = [],
            goToPersonDetail,
            ...otherProps
        } = this.props;

        return (
            <Container
                {...otherProps}
                layout="fit"
                className="people-list-view"
            >
                <PeopleList
                    data={people}
                    onItemClick={goToPersonDetail}
                />
            </Container>
        );
    }
}

export default PeopleListView;