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

//ENCONTRAR LA LISTA DE POKEMON
const listaPokemons = document.getElementById("listaPokemon");

//MOSTRAR TODA LA LISTA DE POKEMON AL INICIAL LA PÁGINA
pokemons.forEach((pokemon) => {
    const itemPokemon = document.createElement("li");
    itemPokemon.innerHTML =
        "<hr/><p><b>Pokemon:</b> " +
        pokemon.name +
        "</p><p><b>Type:</b> " +
        pokemon.type +
        "</p>";
    listaPokemons.appendChild(itemPokemon);
});

//FILTRAR CADA POKEMON SEGÚN LO INTRODUCIDO EN EL CUADRO DE BÚSQUEDA
const filtrarPokemon = () => {
    const busquedaPokemon = inputBusqueda.value.toLowerCase();
    const pokemonFiltrados = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(busquedaPokemon);
    });
    listaPokemons.innerHTML = "";
    mostrarPokemons(pokemonFiltrados);
}

//MOSTRAR LOS POKEMON FILTRADOS
const mostrarPokemons = (listaObjetosPokemon) => {
    listaObjetosPokemon.forEach((pokemon) => {
        const itemPokemon = document.createElement("li");
        itemPokemon.innerHTML =
            "<hr/><p><b>Pokemon:</b> " +
            pokemon.name +
            "</p><p><b>Type:</b> " +
            pokemon.type +
            "</p>";
        listaPokemons.appendChild(itemPokemon);
    });
}

//ENCONTRAMOS Y AÑADIMOS EVENTO 'KEYUP' AL INPUT DE BÚSQUEDA
const inputBusqueda = document.getElementById("searchPokemon");
inputBusqueda.addEventListener("input", filtrarPokemon);
