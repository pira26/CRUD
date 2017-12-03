'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Schema.Types.ObjectId,
  	username: { type: String, required: true },
  	mail: { type: String, index: { unique: true }, required: true },
    password: { type: String, required: true },
  	// date: { type: Date, default: Date.now },
    // age: { type: Number, min: 18, max: 99 },
    // address: { type: String, required: true },
    // avatar: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);