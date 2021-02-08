const express = require('express');
const pokemon = express();
const axios = require('axios');
// const axios = require('axios');

pokemon.set('view engine', 'pug');

// const ajaxRoute = require('./routes/Ajax');

// pokemon.use(ajaxRoute);

pokemon.get('/', async (req, res) => {
    let pokedexResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(pokedexResponse);
    res.render('pokemon');
})

// pokemon.get('/', (req, res) => {
    
//     res.render('pokemon');//rendering pug
// });
pokemon.use('/static', express.static('public'));

// app.get('/dog/random', async (req, res) => {
//     let dogResponse = await axios.get("https://dog.ceo/api/breeds/image/random");
//     res.send(dogResponse.data.message);
//     console.log(dogResponse.data.message);
//   })
  
  
pokemon.listen(3000, () => {
    console.log('The application is running on localHost:3000');
});
