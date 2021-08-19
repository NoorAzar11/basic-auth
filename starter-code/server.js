'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const blogRouter = require('./routes/Signin')
const userRouter = require('./routes/SignUp')


app.use(blogRouter);
app.use(userRouter);



app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.send('Hello')
})
const start=(port)=>{
    app.listen(port,()=>console.log(`listining to port :  ${port}` ))
}

module.exports = {
    app: app,
    start: start,   
}