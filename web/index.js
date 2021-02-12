const getPokemonProps = (pokemonData) =>  {
    let name = pokemonData.name;
    let id = pokemonData.id;
   //  let image = pokemonData.sprites['front_shiny'];
    let image2 = pokemonData.sprites.other['official-artwork']['front_default'];
    let type = pokemonData.types[0].type.name;

    return {name,id,image2, type};
}

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
           
         let response = JSON.parse(this.responseText);
         console.log(response);
         let name = response.name;
         let id = response.id;
        //  let image = response.sprites['front_shiny'];
         let image2 = response.sprites.other['official-artwork']['front_default'];
         let type = response.types[0].type.name;
            // console.log(response);

           
      
            // document.querySelector('.card').innerHTML += id;
            // document.querySelector('.PokemonImage').src = image;
        
        }
    }
    
    const getPokemon = (beg,end) => {
        const fetchRequests = [];
        for(let i = beg; i <= end; i++){
            fetchRequests.push(fetch(`http://localhost:4000/pokemon/${i}`).then( res => res.json()));
        }
        return Promise.all(fetchRequests);
    }

    // xhr.open("GET", "http://localhost:4000/pokemon/98")
    // xhr.send();

    const renderPOkemon = ({name,id, image2})=> {
        document.querySelector('.wrapper').innerHTML += `<div class="card"><div class="idTypeDiv"><h4>${name}</h4> <h4>${id}</h4> </div><img src="${image2}" height="200px" width="150px"> </div>`;
    }
    getPokemon(1, 100).then( data => data.map(getPokemonProps)).then(data => data.forEach(renderPOkemon));

   