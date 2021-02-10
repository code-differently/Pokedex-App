const express = require('express');
const pokemon = express();
const axios = require('axios');
// const axios = require('axios');

pokemon.set('view engine', 'pug');

// const ajaxRoute = require('./routes/Ajax');

// pokemon.use(ajaxRoute);

pokemon.get('/', async (req, res) => {
    let pokemon = [];
    for(let pokemonNumber = 1; pokemonNumber < 10; pokemonNumber++){
        let pokedexResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
        pokemon.push(pokedexResponse.data);
    }
    
    pokemon = pokemon.map( data => {
        let {name, id }= data;
        let type = data.types[0].type.name;
        let image = data.sprites['front_default'];
        return {image,type,id,name};
    });
   //  console.log({pokemon});
    // console.log('pokedexResponse.data', pokedexResponse.data);
    // console.log('pokedexResponse.data.abilities', pokedexResponse.data.name)
    res.render('pokemon', {pokemon});
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
    console.log('The application is running on localHost:3000!');
});