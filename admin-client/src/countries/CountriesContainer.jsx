import React, {useState, useEffect} from 'react';
import Container from '@luisgilgb/react-container';
import Grid from '@luisgilgb/react-grid';
import axios from 'axios';
import ROUTES from '../routes';

const CountriesContainer = props => {
    const {
        ...otherProps
    } = props;

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get('/api/countries')
            .then(({data}) => {
                setCountries(data);
            })
            .catch(console.error);
    }, []);

    return (
        <Container
            {...otherProps}
        >
            <Container
                layout="center"
                height={60}
            >
                Countries
            </Container>
            <Container
                layout="fit"
            >
                <Grid
                    data={countries}
                    columns={[{
                        columnKey: 'countryId',
                        title: 'Country ID',
                        width: 120
                    },
                    {
                        columnKey: 'shortName',
                        title: 'Country short name',
                        width: 180
                    },
                    {
                        columnKey: 'name',
                        title: 'Country name',
                        minWidth: 300,
                        flex: 1,
                        renderFn: (value) => value.en
                    }]}
                />
            </Container>
        </Container>
    );
}

export default CountriesContainer;