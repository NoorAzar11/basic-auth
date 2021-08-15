'use strict';

require('dotenv').config();

const server = require('./server');
const {db} = require('./app'); //destructuring es6


db.sync().then(()=> {
    server.start(process.env.PORT|| 3000);
})
.catch(console.error);