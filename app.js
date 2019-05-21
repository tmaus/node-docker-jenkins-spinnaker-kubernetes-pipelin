const mongoose = require('mongoose')
var express = require('express');
require('dotenv').config()


var app = express()

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || '3000'
app.set('port', port)
app.listen(port, () => {
    console.log('MongoDB URL in use: ' + process.env.MONGO_URL)
    mongoose.connect(process.env.MONGO_URL)
    mongoose.connection
      .once('open', () => console.log('connected to MongoDB!'))
      .on('error', err => console.error('connecting to MongoDB ' + err))
  
    console.log('Express server listening on port ' + port) 
  
  })