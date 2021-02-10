function getPokemon(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById("name") = this.responseText;
        }
    }

    xhr.open("GET", "http://localhost:3000/Pokemon")
    xhr.send();
}