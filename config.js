const dotenv = require('dotenv').config();
// const mongoose = require('mongoose');

module.exports = {
  'port': `${process.env.PORT}` || 4000,
  // 'dbUrl': `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds163034.mlab.com:63034/cityspot`,
  "jwtSecret": "a secret phrase !"
}