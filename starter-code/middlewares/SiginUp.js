'use strict';


const bcrypt = require('bcrypt');

const auThBasic = require('../models/Auth');


module.exports = async (req, res, next) => {


    try {


        req.body.password = await bcrypt.hash(req.body.password, 10);

        const record = await auThBasic.create({

            username: req.body.username,
            password: req.body.password
        });

        next();

    } catch (e) {

        next('Error through Reg')

    }

}
