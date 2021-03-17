const express = require('express')
const app = express()
const port = 3000

app.get('/pokemon', (req, res) => {
  res.send('Hello Pokemon!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
function fetchPokemon() {
const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon
      .map(
          (pokeman) => `
      <li class="card">
          <img class="card-image" src="${pokeman.image}"/>
          <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
          <p class="card-subtitle">Type: ${pokeman.type}</p>
      </li>
  `
      )
      .join('');
  pokedex.innerHTML = pokemonHTMLString;
};
}
fetchPokemon();