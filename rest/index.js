const express = require('express')
const axios = require('axios');
const cors = require("cors")
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.use(cors());

let pokemon;

class Pokemon {
  constructor(name, id, img, type) {
    this.name = name;
    this.id = id;
    this.img = img;
    this.type = type;
  }
}

let pokedex = [];
let pokeman;

app.get('/', async (req, res) => {

    var interval = {
      limit: 50,
      offset: 0
    }

  //select list of 5 pokemon, with their names and urls
  //loop through each one's url to 
  //then access the rest of its data
  //create an instance of the pokemon class
  //fill it with the data from second API call
  //push that instance object to an array
  //loop restarts

  P.getPokemonsList(interval) // with Promise
  .then(function(response) {
    console.log(response.results);
    for ( let i = 0 ; i < response.results.length ; i++ ) {

      P.resource([response.results[i].url]) // with Promise
      .then(function(response) {
        pokeman = response.map(data => (
          {
            name: data.name,
            id: data.id,
            img: data.sprites["front_default"],
            type: data.types[0].type.name
          }
        ))
        pokedex.push(pokeman);
        return;
      
      }).catch(function(error) {
        console.log('There was an ERROR: ', error);
      })
    } 
    res.send( pokedex );

  }).catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
});

