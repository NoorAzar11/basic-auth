'use strict';

'use strict';

const express = require('express');

const router=express.Router();

const regMid=require('../middlewares/SignIn');

router.post('/signup',regMid,(req,res)=>{
res.status(200).json(record);

});

module.exports=router