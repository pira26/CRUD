'use strict';

const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
  'port': `${process.env.PORT}` || 4000,
  'dbUrl': `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds129386.mlab.com:29386/simple-crud`,
  "jwtSecret": "a secret phrase !"
}