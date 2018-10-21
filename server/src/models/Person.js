// server/models/Person.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        movies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Movie'
            }
        ],
        countries: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Country'
            }
        ],
        birth: {
            date: {
                type: Date
            },
            place: {
                type: String
            }
        },
        death: {
            date: {
                type: Date
            },
            place: {
                type: String
            }
        },
        pic: {
            type: String
        },
        infoLinks: {
            wiki: {
                type: String
            },
            imdb: {
                type: String
            },
            youtube: {
                type: String
            },
            twitter: {
                type: String
            },
            facebook: {
                type: String
            }
        }
    }
);

module.exports = mongoose.model('Person', PersonSchema);
