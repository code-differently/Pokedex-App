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
    } catch (e){
        console.log(e);
    }  
    });

    const pokemon = data.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites["front_default"],
      
    }));

    app.listen(3000, () => {
      console.log("Started on Port 3000");
});