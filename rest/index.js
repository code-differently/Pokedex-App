const express = require('express')
const axios = require('axios');
const cors = require("cors")

const app = express()
const port = 4000

app.use(cors())



app.get('/pokemon/:id', async (req, res) => {


  let pokemonNumber = req.params.id
   let pokedexResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
   
  res.send(pokedexResponse.data);


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})