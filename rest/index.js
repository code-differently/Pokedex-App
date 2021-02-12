const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const { removeAllListeners } = require("nodemon");


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/Pokemon", async (req, res) => {
      try {
        let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1");
        data = await res.json();
        let pokemonAll = req.body;
        console.log(pokemonAll);
      } catch(error) {
         document.getElementById("log").innerHTML = `Error: ${error}`;
      } finally {
        for (var key in pokemonAll) {
          this.name =  pokemonAll.name;
          this.id = pokemonAll.id;
          //this.image = data.sprites["front_default"];
          this.type = pokemonAll.type;
        }
        console.log(this.name);
        console.log(this.id);
        console.log(this.type);
        
    } // end finally
}); //end app.get     

    app.listen(3000, () => {
      console.log("Started on Port 3000");
}); //end of app.listen
