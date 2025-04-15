const mongoose = require('mongoose')

const Schema = mongoose.Schema

const wordSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    pronunciation: {
        type: String
    },
    meanings: [{
        definition: {
          type: String,
          required: true
        },
        partOfSpeech: {
          type: String,
          required: true
        },
        examples: [String]
    }],
    synonyms: [String],
    antonyms: [String],
    etymology: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model('Word', wordSchema)


