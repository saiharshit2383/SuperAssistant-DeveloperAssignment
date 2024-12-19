const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3300
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
require('dotenv').config()
const dotenv = require('dotenv')
const MongoDbStore = require('connect-mongo')
const passport = require('passport')
const url = 'mongodb://localhost:27017/pizza'; 

mongoose.connect('mongodb://localhost:27017/pizza', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('open', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

//Start Server

app.listen(PORT, ()=>{
  // const pass = process.env.COOKIE_SECRET;
  //console.log(pass);
  console.log(`Listening on port ${PORT}`)
})

