// server/models/Country.js
const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        shortName: {
            type: String,
            required: true
        },
        flag: {
            type: String
        }
    }
);

module.exports = mongoose.model('Country', CountrySchema);
