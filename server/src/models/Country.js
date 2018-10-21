// server/models/Country.js
const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema(
    {
        countryId: {
            type: String,
            required: true,
            unique: true
        },
        shortName: {
            type: String,
            required: true
        },
        name: {
            en: {
                type: String,
                required: true
            },
            es: {
                type: String,
                required: true
            }
        },
        flag: {
            type: String
        }
    }
);

module.exports = mongoose.model('Country', CountrySchema);
