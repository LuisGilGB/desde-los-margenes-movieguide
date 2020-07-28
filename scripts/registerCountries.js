const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const axios = require('axios');

const COUNTRIES_PATH = path.join(__dirname, '../aux_files/countries.json');

console.log('Reading countries JSON file...')
const rawCountries = fs.readJsonSync(COUNTRIES_PATH);
console.log('Countries JSON file successfully read');

const countries = rawCountries.map(c => ({
    countryId: c.alpha2Code.toLowerCase(),
    shortName: c.alpha3Code,
    name: {
        en: c.name,
        es: c.esName
    }
}));

console.log('Time to make the POST request...');
// This request must be done with the server running in localhost:5000
axios.post('http://localhost:5000/api/countries', countries)
    .then((res) => {
        console.log(chalk.green('Post successfully done'));
        console.log(chalk.cyan('Response:'));
        console.log(res);
    })
    .catch(console.error);