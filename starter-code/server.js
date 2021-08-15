'use strict';


const express = require('express');
const basicAuth = require('./models/Auth')

const LogInRoute = require('./routes/Signin')
const regRote = require('./routes/SignUp')


const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(LogInRoute);
app.use(regRote);

function start(port) {
    app.listen(port, ()=> console.log(`Hello From the OtherSide${port}`))
}

module.exports = {
    app: app,
    start: start,   
}