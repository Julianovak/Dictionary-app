const Word = require('../models/wordModel')
const mongoose = require('mongoose')


//get all words

const getWords = async (req, res) => {
    const words = await Word.find({}).sort({createdAt: -1}) //createdAt:-1 decending order, newest first

    res.status(200).json(words)
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

const deleteWord = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No word found'})
    }

    const word = await Word.findOneAndDelete({ _id: id }) //mongodb _id

    if(!word) {
        return res.status(404).json({error: 'No word found'})
    }

    res.status(200).json(word)


}


//update a word

const updateWord = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No word found'})
    }

    const word = await Word.findOneAndUpdate({ _id: id},{
        ...req.body //spread operator
    })

    if(!word) {
        return res.status(404).json({error: 'No word found'})
    }

    res.status(200).json(word)
}



module.exports = {
    getWords,
    getWord,
    createWord,
    deleteWord,
    updateWord
}