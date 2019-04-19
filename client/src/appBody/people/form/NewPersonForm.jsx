import React from 'react';
import {Container, Form} from '../../../common';

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
            </Form>
        </Container>
    );
}

export default NewPersonForm;