let id;
let img;
// let energyType = [ 
//     'grass', 
//     'lightning', 
//     'darkness', 
//     'fairy', 
//     'fire', 
//     'psychic', 
//     'metal', 
//     'dragon', 
//     'water', 
//     'fighting', 
//     'colorless'
// ];

let details = new XMLHttpRequest();
details.onreadystatechange = function() {
    if (this.readyState === 4) {
        document.getElementById('cardGrid').innerHTML = this.responseText;
        //console.log(pokemonData);
        // let charInfo = document.getElementById('charInfo');
        // charInfo.innerHTML = this.responseText;
    }
}
    //details.open('GET', 'http://localhost:3000/pokemon/id');
    details.open('GET', 'https://pokeapi.co/api/v2/pokemon/1');
    details.send();

//function getPokemonData() {
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         let rolodex = JSON.parse(xhr.responseText);
//         //const name = rolodex.results[0].name.toUpperCase();
//         //let pokemon = document.getElementById('pokemon');
//         //pokemon.innerHTML = this.responseText;
//         console.log(rolodex);
//     }
// }
//     //xhr.open('GET', 'http://localhost:3000/pokemon');
//     xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/');
//     xhr.send();


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ example code from dog api ~~~~~~~~~~~

// function getRandomDoggiePic(){
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if(this.readyState === 4 && this.status === 200) {
//             document.getElementById("doggie").src = this.responseText;
//         }
//     }

//     xhr.open("GET", "http://localhost:4000/dog/random")
//     xhr.send();
// }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//module.exports = router; // <-- this how you reference an external file, router is the declared argument in another file