const button = document.querySelector("button");

button.addEventListener("click", () => {
   fetch("http://localhost:4000/all")
     .then((res) => res.json())
     .then((pokemon) => {
       console.log(pokemon.data);
     });
 });