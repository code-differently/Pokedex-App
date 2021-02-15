// install nodemon to auto start server request instead of doing it manually. install with the followoing command: npm install -g nodemon
// install pug: npm install pug --save
// install middleware body parser: npm install body-parser --save
// install middleware to read cookie data: npm install cookie-parser --save

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const router = express.Router(); // <-- to use the router, replace all "app" with "router" : also, create a router folder and copy all route coding to the router folder

const app = express();
const port = 3000;

//app.use(bodyParser.urlencoded( { extended: false }));
app.use(cors());

app.get('/pokemon/:id', async (req, res) => {
  let pokemonId = req.params.id
  let pokedexResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  res.send(pokedexResponse);
})

app.listen(port, () => {
  console.log(`Test to show that app is listening on http://localhost:${port}`)
})