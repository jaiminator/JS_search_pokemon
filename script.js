const pokemons = [
    {
        name: "Pikachu",
        type: "electric",
    },
    {
        name: "Bulbasur",
        type: "grass",
    },
    {
        name: "Eevee",
        type: "normal",
    },
    {
        name: "Mew",
        type: "psy",
    },
    {
        name: "Squirtle",
        type: "water",
    },
    {
        name: "Charmander",
        type: "fire",
    },
    {
        name: "Charizard",
        type: "fire",
    },
];

//RECORRE Y MUESTA POR CONSOLA CADA PROPIEDAD DE CADA POKEMON
/* pokemons.forEach(pokemon => {
    const {name, type} = pokemon;
    console.log(name, type);
}) */

//CREA Y MUESTRA LA LISTA DE POKEMON
const listaPokemons = document.getElementById("listPokemons");

for (let i = 0; i < pokemons.length; i++) {
    let pokemon = document.createElement("div");
    const { name, type } = pokemons[i];
    pokemon.innerHTML =
        "<hr/><p><b>Pokemon: </b>" +
        name +
        "</p><p><b>Type: </b>" +
        type +
        "</p>";
    listaPokemons.appendChild(pokemon);
}

function filtrar(e) {
    console.log(e.target.value); //COMPRUEBA EL VALOR DE LO QUE HAS INTRODUCIDO

    if (busqueda.value !== "") {
        pokemons.forEach(pokemon => {
            const {name, type} = pokemon;
            if (name.toLowerCase().includes(busqueda.value)) {
                console.log(name);
                /* pokemon.innerHTML = "<hr/><p><b>Pokemon: </b>" +
                    name +
                    "</p><p><b>Type: </b>" +
                    type +
                    "</p>";
                listaPokemons.appendChild(pokemon); */
            } else {
                /* pokemon.innerHTML = "";
                listaPokemons.appendChild(pokemon); */
            }
        });
    } else {
        pokemons.forEach(pokemon => {
            const {name, type} = pokemon;
            console.log(name);
        })
    }
    /* 

    listaPokemons = pokemons.filter((poke) => {
        if (busqueda.value) {
        for (let i = 0; i < pokemons.length; i++) {
            const { name, type } = pokemons[i];
            if (name.toLowerCase().includes(busqueda.value)) {
                pokemons[i].innerHTML =
                    "<hr/><p><b>Pokemon: </b>" +
                    name +
                    "</p><p><b>Type: </b>" +
                    type +
                    "</p>";
            } else {
                pokemons[i].innerHTML = "";
            }
        }
    }
    }); */

    
}

const busqueda = document.getElementById("search");
busqueda.addEventListener("keyup", filtrar);
