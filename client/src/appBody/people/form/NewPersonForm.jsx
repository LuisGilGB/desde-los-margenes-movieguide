import React, {useState} from 'react';
import {Container} from '@luisgilgb/react-container';
import {Form, TextField} from '../../../common';

const NewPersonForm = props => {
    const {
        data: dataProp = {},
        ...otherProps
    } = props;

    const [data, setData] = useState(dataProp);

    const onSubmit = (e, ...args) => {
        e.preventDefault();
        console.log(data);
    }

    const onChange = (cmpProps, newValue, oldValue) => {
        const {name: fieldKey} = cmpProps;
        setData({
            ...data,
            [fieldKey]: newValue
        });
    }

    return (
        <Container
            layout="fit"
            {...otherProps}
        >
            <Form
                layout="colflex"
                onSubmit={onSubmit}
            >
                <TextField
                    value={data.name}
                    name="name"
                    label="Name"
                    onChange={onChange}
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