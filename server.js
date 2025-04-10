require('dotenv').config()

const express = require('express')
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


//listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
})

process.env