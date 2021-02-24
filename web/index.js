const getPokemonProps = (pokemonData) =>  {
    // let name = pokemonData.name;
    let name = pokemonData.name[0].toUpperCase() + pokemonData.name.substring(1, pokemonData.name.length);
   
    let id = pokemonData.id;
    let image2 = pokemonData.sprites.other['official-artwork']['front_default'];
    let type = pokemonData.types[0].type.name;
    console.log(type);
    return {name,id,image2, type};
   
}


    
    const getPokemon = (beg,end) => {
        const fetchRequests = [];
        for(let i = beg; i <= end; i++){
            fetchRequests.push(fetch(`http://localhost:4000/pokemon/${i}`).then( res => res.json()));
        }
        return Promise.all(fetchRequests);
    }


    const renderPOkemon = ({name,id, image2, type})=> {
        document.querySelector('.wrapper').innerHTML += `<div class="card ${type}"><div class="idTypeDiv"><h4>${name}</h4> <h4>${id}</h4> </div><img src="${image2}" height="200px" width="200px"> </div>`;
        // const colorMap = { electric: '#0000' }

        //     const pokemonColor = colorMap[pokemonType]

        //     card.style.backgroundColor = pokemonColor
    }
    getPokemon(1, 100).then( data => data.map(getPokemonProps)).then(data => data.forEach(renderPOkemon));

   