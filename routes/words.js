const express = require('express')
const Word = require('../models/wordModel')

const router = express.Router() //creates instance of router

//gets all words
router.get('/', (req, res) => {
    res.json({mssg: 'GETS all words'})
}) //handler

router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single word'})
})

router.post('/', async (req, res) => {
    const { title, pronunciation, meanings, synonyms, antonyms, etymology } = req.body;

    try {
        const word = await Word.create({title, pronunciation, meanings, synonyms, antonyms, etymology})
        res.status(200).json(word)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({mssg: "POST a new word"})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: "Delete a word"})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE a word"})
})

module.exports = router //exports the router