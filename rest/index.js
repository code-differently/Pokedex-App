const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
let data;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/Pokemon", async (req, res) => {
    try{
      const pokeResponse = await fetch("https://pokeapi.co/api/v2/pokemon/1");
      data = await pokeResponse.json();
      console.log(data);
      data.types.map(type => type.type.name).join(", ");
      console.log(data.sprites["front_default"]);
      // "other": {
      //   "dream_world": {
      //       "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      //       "front_female": null
      //   },
      //   "official-artwork": {
      //       "front_default"
      //res.send(data.results[0].name);
      //res.send(data.results[0].url);
    } catch (e){
        console.log(e);
    }  
    });

    app.listen(3000, () => {
      console.log("Started on Port 3000");
});