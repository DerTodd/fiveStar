const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const DrinksSchema = new Schema({
    venue: {
        type: ObjectId,
        ref: 'Venue'
    },
    drinkName: {
        type: String,
        required: true
    },
    RecommendationCount: {
        type: Number
    },
    recommendations: [{
        user: { type: ObjectId }
    }],
    date: {
        type: Date,
        default: Date.now
    }

})

const Drinks = mongoose.model('Drinks', DrinksSchema);
module.exports = Drinks