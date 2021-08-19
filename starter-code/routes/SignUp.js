'use strict';

'use strict';

const express = require('express');

const router=express.Router();

const regMid=require('../middlewares/SiginUp');

router.post('/signup',regMid,(req,res)=>{
res.status(200).json(req.record);

});

module.exports=router