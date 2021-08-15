'use strict';


const bcrypt = require('bcrypt');
const base64 = require('base-64');
const auThBasic = require('../models/Auth');


module.exports = async (req, res, next) => {

    if (req.headers['authorization']) {


        let basicHeaderParts = req.headers.authorization.split(' ');
      
    
        let encodedString = basicHeaderParts.pop(); 
    
        let decodedString = base64.decode(encodedString); // "username:password"
    
        let [username, password] = decodedString.split(':'); // username, password
    
        try {
            const user = await auThBasic.findOne({ where: { username: username } });
    
            const valid = await bcrypt.compare(password, user.password);
    
            if (valid) {
    
                next(user)
            }
            
            else {
    
                next('Invalid UserName and Password')
            }
        } catch (error) {
    
            next('Error in Login')
        }


    }

}
