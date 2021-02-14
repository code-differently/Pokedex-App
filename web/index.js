const button = document.querySelector("button");
const inputText = document.querySelector("#numberOfPokemons");
const mainContainer = document.querySelector("#poke_container");
const colors = {
bug: '#3b9950', 
dark: '#5a5979',
dragon: '#61cad9',
electric: '#fbfb71',
fairy: '#ea1169',
fighting: '#ef6138',
fire: '#fd4c59',
flying: '#93b2c7',
ghost: '#906790',
grass: '#26cb4f',
ground: '#6e491f', 
ice: '#d9eefa',
normal: '#c998a7',
poison: '#9b69d8',
psychic: '#f71c91',
rock: '#8a3d22',
steel: '#42bd94',
water: '#86a9fa'
};
const main_types = Object.keys(colors);

button.addEventListener("click", () => {
    let input = inputText.value;
   fetch(`http://localhost:4000/all/${input}`)
     .then((res) => res.json())
     .then((pokemon) => {
      //params name, id, type, image
      // console.log(pokemon);
       //call function pass params
       
       for (let i=0 ; i < input; i++){
         let name = pokemon[i].name;
         let id = pokemon[i].id;
         let type = pokemon[i].type;
         let image = pokemon[i].image;
         showPokemon(name, id, type, image);
       }
        
     });
 });

 //function to create cards
function showPokemon ( id, name, type, image){
  
 const poke = document.createElement('div');
 poke.classList.add('poke_container')
 poke.className = 'container';
 poke.id = 'cardDeck'

 //const poke_types = pokemon[i]type.map(el => el.type.name) 
 //const typeColor = main_types.find(type => poke_types.indexOf(type) > -1 );
 const pokeInnerHTML = `
  <div class="pokemon">
    <div class="info">
      <span class="pNum">${id}</span>
      <h4 class="name">${name}</h4>
      <h4 class="type"><span>${type}</span></h4>
    </div>
    <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
    </div>
  </div>
 
 `;

 poke.innerHTML = pokeInnerHTML; 

   //create a div for card follow html format
 //append to mainContainer.appendChild(variable);
 console.log(name, id, image, type);


 /*let pokeName = document.createElement('h4');
 pokeName.textContent = name;

 let pokeId = document.createElement('h4');
 pokeId.textContent = id;

 let pokeType = document.createElement('h4');
 pokeType.textContent = type;

 let pokeImage = document.createElement('sprites');
 pokeImage.textContent = image;*/
 
  mainContainer.appendChild(poke); 
  /*mainContainer.appendChild(pokeName);
  mainContainer.appendChild(pokeId);
  mainContainer.appendChild(pokeType);
  mainContainer.appendChild(pokeImage);
 */
}
