// server/models/Country.js
const mongoose = require('mongoose');

let CountrySchema = new mongoose.Schema(
    {
        id: String,
        name: String,
        shortName: String,
        flag: String
    }
);
module.exports = mongoose.model('Country', CountrySchema);