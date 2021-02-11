const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const { removeAllListeners } = require("nodemon");
let pokemon = [];
let allPokemon = [];
let data;


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/Pokemon", async (req, res) => {
      try {
        pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=2")
        data = await res.json();
        console.log(res);
      } catch(error) {
         document.getElementById("log").innerHTML = "Error: " + error + ".";
      } finally {
      let allPokemon = res.map((data) => ({
        name: data.name,
        id: data.id,
        image: data.sprites["front_default"]
      }));
    } // end finally
}); //end app.get





      

     



      

    app.listen(3000, () => {
      console.log("Started on Port 3000");
}); //end of app.listen
