// models/Personne.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let personneSchema = new Schema({
    name: {
        type: String
    },
    long: {
        type: String,

    },
    lati: {
        type: String
    }
}, {
    collection: 'personnes'
});


module.exports = mongoose.model('Personne', personneSchema);
