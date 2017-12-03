'use strict';

const mongoose = require('mongoose');

module.exports.connect = (uri) => {
    mongoose.connect(uri, { 
        useMongoClient: true,
        config: 
            { 
                autoIndex: false 
            },
    });
    // plug in the promise library:
    mongoose.Promise = global.Promise;

    mongoose.connection.on('error', (err) => {
        console.error(`Mongoose connection error: ${err}`);
        process.exit(1);
    });
    
    require('./userSchema');
};