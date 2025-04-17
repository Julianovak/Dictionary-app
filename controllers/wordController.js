const Word = require('../models/wordModel')
const mongoose = require('mongoose')


//get all words

const getWords = async (req, res) => {
    const words = await Word.find({}).sort({createdAt: -1}) //createdAt:-1 decending order, newest first

    res.status.json(words)
}


//get a single word

const getWord = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No word found'})
    }

    const word = await Word.findById(id)

    if(!word) {
        return res.status(404).json({error: 'No word found'})
    }

    res.status(200).json(word)
}


//create new word
const createWord = async (req, res) => {
    const { title, pronunciation, meanings, synonyms, antonyms, etymology } = req.body;

    try {
        const word = await Word.create({title, pronunciation, meanings, synonyms, antonyms, etymology})
        res.status(201).json(word)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a word


//update a word



module.exports = {
    getWords,
    getWord,
    createWord
}