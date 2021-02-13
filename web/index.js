const button = document.querySelector("button");
const inputText = document.querySelector("#numberOfPokemons");
const mainContainer = document.querySelector("#cardDeck");

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
   //create a div for card follow html format
 //append to mainContainer.appendChild(variable);
 console.log(name, id, image, type);
 let pikachu = document.createElement('p');
 pikachu.textContent = name;
 console.log (name);
  mainContainer.appendChild(pikachu);
 
}
