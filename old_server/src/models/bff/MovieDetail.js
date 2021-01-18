// server/models/Movie.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieDetailSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        originalTitle: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        year: {
            type: Number,
            required: true
        },
        minutesLength: {
            type: Number
        },
        directors: [
            {
                type: String
            }
        ],
        actors: [
            {
                type: String
            }
        ],
        countries: [
            {
                type: String
            }
        ]
    }
);

module.exports = mongoose.model('MovieDetail', MovieDetailSchema);