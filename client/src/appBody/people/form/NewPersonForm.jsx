import React from 'react';
import {Container, Form, TextField} from '../../../common';

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
            layout="fit"
            {...otherProps}
        >
            <Form
                layout="vflex"
                onSubmit={onSubmit}
            >
                <TextField
                    value={data.name}
                    name="name"
                    label="Name"
                />
                <input
                    type="submit"
                    value="Add person"
                />
            </Form>
        </Container>
    );
}

export default NewPersonForm;