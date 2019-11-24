const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0-bpfaa.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})

// mongoose.connect(mongoConnectionString, {useUnifiedTopology: true});

app.use(bodyParser.json())
const product = require('./controllers/product.js')(app)

app.get('/', (req, res) => {
    res.send('Ok')
})

app.listen(3000, () => {
    console.log('server is listening...')
})