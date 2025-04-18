const express = require('express')
const {
    createWord,
    getWord,
    getWords,
    deleteWord,
    updateWord
} = require('../controllers/wordController')


const router = express.Router() //creates instance of router

//GET all words
router.get('/', getWords)

//GET a word
router.get('/:id', getWord)

//POST a new word
router.post('/', createWord)

//DELETE a word
router.delete('/:id', deleteWord)

//UPDATE a Word
router.patch('/:id', updateWord)

module.exports = router //exports the router