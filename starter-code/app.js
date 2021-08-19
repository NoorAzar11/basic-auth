'use strict';



const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = "postgres://localhost:5432/noor";
const UserModal= require('./models/Auth');

let sequelize = new Sequelize(POSTGRES_URI, {});
const auThBasic=UserModal(sequelize, DataTypes);

module.exports={
  db:sequelize ,
  auThBasic:auThBasic
}