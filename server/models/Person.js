// server/models/Person.js
const mongoose = require('mongoose');

let PersonSchema = new mongoose.Schema(
    {
        name: String,
        pic: String,
        wikiLink: String,
        imdbLink: String
    }
);
module.exports = mongoose.model('Person', PersonSchema);