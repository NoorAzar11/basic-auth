'use strict';


const bcrypt = require('bcrypt');

const {auThBasic} = require('../app');


module.exports = async (req, res, next) => {
console.log(req.body)

    try {


        req.body.password = await bcrypt.hash(req.body.password, 10);

     req.record=await auThBasic.create(req.body);
      

        next();

    } catch (e) {

        next('Error through Reg')

    }

}
