const button = document.querySelector("button");
const inputText = document.querySelector("#numberOfPokemons");

button.addEventListener("click", () => {
    let input = inputText.value;
   fetch(`http://localhost:4000/all/${input}`)
     .then((res) => res.json())
     .then((pokemon) => {

       console.log(pokemon);
     });
 });
