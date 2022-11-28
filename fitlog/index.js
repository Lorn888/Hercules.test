const express = require('express');
const app = express();
const path = require('path')

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

require('dotenv').config();
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);  
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(3200, () => {
    console.log("We are going on port 3200")
}) 