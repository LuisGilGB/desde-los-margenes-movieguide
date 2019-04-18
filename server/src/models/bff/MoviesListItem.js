// server/models/bff/MoviesListItem.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MoviesListItemSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        year: {
            type: Number
        },
        directors: {
            type: String
        },
        countries: {
            type: String
        }
    }
);

module.exports = mongoose.model('MoviesListItem', MoviesListItemSchema);