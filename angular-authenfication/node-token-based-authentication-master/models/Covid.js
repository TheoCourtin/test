// models/Covid.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let covidSchema = new Schema({
    province: {
        type: String
    },
    country: {
        type: String,
    },
    lon: {
        type: String,
    },
    lat: {
        type: String
    }
}, {
    collection: 'covid'
})


module.exports = mongoose.model('Covid', covidSchema)
