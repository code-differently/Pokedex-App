let id;
let img;
let energyType = [ 
    'grass', 
    'lightning', 
    'darkness', 
    'fairy', 
    'fire', 
    'psychic', 
    'metal', 
    'dragon', 
    'water', 
    'fighting', 
    'colorless'
];

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        let rolodex = JSON.parse(xhr.responseText);
        let pokemon = document.getElementById('pokemon');
        const name = rolodex.results[0].name.toUpperCase();
        pokemon.innerHTML = name;
        console.log(rolodex);
    }
}
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/');
    xhr.send();

let details = new XMLHttpRequest();
details.onreadystatechange = function() {
    if (details.readyState === 4) {
        let abilities = JSON.parse(details.responseText);
        console.log(abilities);
    }
}
    details.open('GET', 'https://pokeapi.co/api/v2/pokemon/1');
    details.send();

// example code from dog api ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getRandomDoggiePic(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            document.getElementById("doggie").src = this.responseText;
        }
    }

    xhr.open("GET", "http://localhost:4000/dog/random")
    xhr.send();
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

module.exports = router; // <-- this how you reference an external file, router is the declared argument in another file