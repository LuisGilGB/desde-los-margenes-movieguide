// server/models/Movie.js
const mongoose = require('mongoose');

let MovieSchema = new mongoose.Schema(
    {
        title: String,
        originalTitle: String,
        description: String,
        year: Number,
        minutesLength: Number,
        director: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person'
        },
        actors: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Person'
            }
        ],
        countries: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Country'
            }
        ]
    }
);
MovieSchema.methods.addActor = actor => {
    this.actors.push(actor)        
}
module.exports = mongoose.model('Movie', MovieSchema);