const express = require('express');
const app = express();
const path = require('path')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(3200, () => {
    console.log("We are going on port 3200")
})