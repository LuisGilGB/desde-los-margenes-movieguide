import React, {useState, useEffect} from 'react';
import Container from '@luisgilgb/react-container';
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
            <Container>
                {countries.map(c => <div key={`country-${c.countryId}`}>{(c && c.name && c.name.es) || ''}</div>)}
            </Container>
        </Container>
    );
}

export default CountriesContainer;