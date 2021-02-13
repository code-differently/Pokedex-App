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
  
 let div = document.createElement('div');
 div.className = 'container';
 div.id = 'cardDeck'
 div.innerHTML = 
 '<div class="card">', '<div class="container">', '<div class="row">', '<h4 class="pName">Pikachu</h4>', '<h4 class="pNum">#025</h4>', '<div class="line"></div>', '</div>',
   '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"></img>', 
   '</div>', '</div>'
 
 //'<h4.pName>name</h4>', '<h4.pNum>id</h4>', '<h4>type</h4>', '<div><img></img></div>' 

  let pokeName = document.createElement('h4.pName');
 pokeName.textContent = name;
 

 let pokeId = document.createElement('h4.pNum');
 pokeId.textContent = id;


 let pokeType = document.createElement('h4');
 pokeType.textContent = type;
 

 let pokeImage = document.createElement('sprites');
 pokeImage.textContent = image;



 /*let div = document.createElement('div');
 div.className = 'container';
 div.id = 'cardDeck'

 let div = document.createElement('div');
 div.className = 'card';
 div.innerHTML = '<p>CreateElement example</p>';

 let div = document.createElement('div');
 div.className = 'container';
 div.innerHTML = '<p>CreateElement example</p>';

 let div = document.createElement('div');
 div.className = 'row';
 div.innerHTML = '<h4>Pikachu</h4>';

 let h = document.createElement('h4');
 h.textContent = '025';
 div.appendChild(h4);
 
 let div = document.createElement('div');
 div.className = 'line';

 let div = document.createElement('div');
div.innerHTML = 'img';

let img = document.createElement('img');
img.innerHTML = image;
div.appendChild(img);


 



  /*return(
    <div class="container" id="cardDeck">
          <div class="card">
              <div class="container">
                <div class="row">
                    <h4 class="pName">Pikachu</h4> 
                    <h4 class="pNum">#025</h4>
                    <div class="line"></div>
                </div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"></img>
              </div>
          </div>
      </div>
  );*/
   //create a div for card follow html format
 //append to mainContainer.appendChild(variable);
 console.log(name, id, image, type);

 /*let div = document.createElement('div');
 div.innerHTML = '<h4></h4>', '<p></p>', 

 let h4 = document.createElement('h4');
  h4.textContent = name;
  let p = document.createElement('p');
  h4.textContent = id;
  let pokeType = document.createElement('p');
  pokeType.textContent = type;
  let img = document.createElement('p');
  p.textContent = image;*/

 /*let pokeName = document.createElement('h4');
 pokeName.textContent = name;

 let pokeId = document.createElement('h4');
 pokeId.textContent = id;

 let pokeType = document.createElement('h4');
 pokeType.textContent = type;

 let pokeImage = document.createElement('sprites');
 pokeImage.textContent = image;*/
 
 
  mainContainer.appendChild(pokeName);
  mainContainer.appendChild(pokeId);
  mainContainer.appendChild(pokeType);
  mainContainer.appendChild(pokeImage);
 
}
