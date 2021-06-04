const express = require('express');
const router = express.Router();

router.get('/users/SignIn', (req, res) =>{
    res.send('Ingresando a la app');
});

router.get('/users/SignUp', (req, res) =>{
    res.send('Register');
});

module.exports = router;