'use strict';

const express = require('express');

const router=express.Router();

const logInMid=require('../middlewares/SignIn');

router.post('/singin',logInMid,(req,res)=>{
res.status(200).json(req.user);

});

module.exports=router