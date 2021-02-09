// install nodemon to auto start server request instead of doing it manually. install with the followoing command: npm install -g nodemon
// install pug - npm install pug --save
// install middleware body parser : npm install body-parser --save
// install middleware to read cookie data : npm install cookie-parser --save


const express = require('express')
const router = express.Router(); // <-- to use the router, replace all "app" with "router" : also, create a router folder and copy all route coding to the router folder
const app = express()
const bodyParser = require("body-parser");
const port = 3000

router.get('/handle',(req,resp) => {
  //code to perform particular action.
  //To access GET variable use req.query() and req.params() methods.
});

// add router in the Express app.
app.use("/", router);

app.get('/', (req, res) => {
  res.send('Test3!');
})

app.get('/pokemon', async (req, res) => {
    let pokemonResponse = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    res.send(pokemonResponse)
    console.log(pokemonResponse);

// reference code for express API call ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.listen(port, () => {
  console.log(`Example app listening at n`)
})



// example code for dog api lab ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const express = require('express')
// const axios = require('axios');
// const cors = require("cors")

// const app = express()
// const port = 4000

// app.use(cors())

// app.get('/dog/random', async (req, res) => {
//   let dogResponse = await axios.get("https://dog.ceo/api/breeds/image/random")
//   res.send(dogResponse.data.message)
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~