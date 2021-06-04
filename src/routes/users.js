const express = require('express');
const router = express.Router();

router.get('/users/SignIn', (req, res) =>{
    res.render('users/signin');
});

router.get('/users/SignUp', (req, res) =>{
    res.render('users/signup');
});

module.exports = router;