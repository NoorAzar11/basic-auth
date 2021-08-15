'use strict'



const UserModal = (sequelize, DataTypes) => sequelize.define('new_users', {

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});



module.exports =UserModal

