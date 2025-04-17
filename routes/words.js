const express = require('express')
const {
    createWord,
    getWord,
    getWords,
} = require('../controllers/wordController')


const router = express.Router() //creates instance of router

//gets all words
router.get('/', getWords)

router.get('/:id', getWord)

router.post('/', createWord)

router.delete('/:id', (req, res) => {
    res.json({mssg: "Delete a word"})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE a word"})
})

module.exports = router //exports the router