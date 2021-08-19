'use strict';

require('dotenv').config();

const app = require('./server');
const {db} = require('./app'); //destructuring es6


db.sync().then(()=> {
    app.start(process.env.PORT|| 3000);
})
.catch(console.error);