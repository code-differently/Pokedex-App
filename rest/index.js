const express = require('express');
const fetch = require('node-fetch');
const cors = require("cors");

const app = express()
app.use(cors())
const port = 4000

app.get('/all', async (req, response) => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0")
    .then((res) => res.json())
    .then((allThePokemon) => {
      const requestsToMake = allThePokemon.results.map(({ url }) =>
        fetch(url).then((res) => res.json())
      );
    return Promise.all(requestsToMake);
    })
    .then(data => {
      response.json(data)
    })
    .catch(err => console.error(err));
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
