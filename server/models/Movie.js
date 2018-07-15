// server/models/Movie.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        originalTitle: String,
        description: String,
        year: Number,
        minutesLength: Number,
        director: {
            type: Schema.Types.ObjectId,
            ref: 'Person'
        },
        actors: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Person'
            }
        ],
        countries: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Country'
            }
        ]
    }
);
MovieSchema.methods.addActor = actor => {
    this.actors.push(actor)        
}
module.exports = mongoose.model('Movie', MovieSchema);