// server/models/Person.js
const mongoose = require('mongoose');
const slugify = require('../utils/slugify.js')
const Schema = mongoose.Schema;

const PersonSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        uniqueAliasSlug: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            match: /^[a-z0-9-]+$/,
            unique: true,
            default: () => slugify(this.name)
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
