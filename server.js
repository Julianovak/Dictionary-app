require('dotenv').config()
console.log("MongoDB URI:", process.env.MONGO_URI)

const express = require('express')
const mongoose = require('mongoose')
const wordRoutes = require('./routes/words')


// creates express app
const app = express()


//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//request, responce(routes)
// app.get('/', (req, res) => {
//     res.json({mssg: 'Welcome to the app'})

// })

app.use('/api/words',wordRoutes)

//connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for request
        app.listen(process.env.PORT, () => {
        console.log('Connected to DB & Listening on port', process.env.PORT);
    })
    })
    .catch((error) => {
        console.log(error)
    })


process.env