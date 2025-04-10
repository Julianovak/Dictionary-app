const express = require('express')

const router = express.Router() //creates instance of router

//gets all words
router.get('/', (req, res) => {
    res.json({mssg: 'GETS all words'})
}) //handler

router.get('/:id', (res,req) =>{
    res.json({mssg: 'GET a single word'})
})

router.post('/', (req, res) => {
    res.json({mssg: "POST a new word"})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: "Delete a word"})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE a word"})
})

module.exports = router //exports the router