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
    console.log(e.target.value);

    listaPokemons = pokemons.filter((poke) => {
        
    });

    /* if (busqueda.value) {
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
    } else {
    } */
}

const busqueda = document.getElementById("search");
busqueda.addEventListener("keyup", filtrar);
