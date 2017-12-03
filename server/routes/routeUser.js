'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/userSchema');

router.route('/users')
    .get((req, res) => {
        user.find({}, (err, users) => {  
            if (err) {  
                res.send(err);  
            } else {             
                res.send(users);  
            }  
        });
    })
      
    .post((req, res) => {
        const user = new User();
        user.username = req.body.username;
        user.mail = req.body.mail;
        user.password = req.body.password;
        user.save((err) => {
            if (err) {
                if (err.code == 11000) {
                    return res.json({success:false, message:'This user already exist!'});
                } else {
                    return res.send(err);
                }
            }
            res.json({message:'User has been successfully created'});
        })
    })

    .put((req, res) => {
        res.send('Got a PUT request at /user => to modify all the data');
    })

    .patch((req, res) => {
        res.send('Got a PATCH request at /user => to modify few values of the data');
    })  

    .delete((req, res) => {
        res.send('Got a DELETE request at /user');
    });

module.exports = router;