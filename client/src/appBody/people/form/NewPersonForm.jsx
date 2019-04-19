import React from 'react';
import {Container} from '../../../common';

const NewPersonForm = props => {
    const {
        data = {},
        ...otherProps
    } = props;

    const onSubmit = (e, ...args) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <Container
            {...otherProps}
        >
            <form onSubmit={onSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                    />
                </label>
                <input
                    type="submit"
                    value="Add person"
                />
            </form>
        </Container>
    );
}

export default NewPersonForm;