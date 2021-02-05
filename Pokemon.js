const express = require('express');
const pokemon = express();

pokemon.set('view engine', 'pug');

pokemon.get('/', (req, res) => {
    
    res.render('pokemon');//rendering pug
});

pokemon.listen(3000, () => {
    console.log('The application is running on localHost:3000!');
});