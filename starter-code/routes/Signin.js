'use strict';

const express = require('express');

const router=express.Router();

const logInMid=require('../middlewares/SignIn');

router.post('/sigin',logInMid,(req,res)=>{
res.status(200).json(user);

});

module.exports=router