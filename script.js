//const url = "https://pokeapi.co/api/v2/pokemon/1";

const pokedex = document.getElementById("pokedex");

const fetchPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit =150`;
};

function displayPokemon(pokemon) {
  console.log(pokemon);
  const PokeString = pokemon
    .map(
      (pokeman) =>
        `<li class = "card">
          <img class = "image" src = "${pokeman.image}"/>
          <h2 class ="card-title"> ${pokeman.id}. ${pokeman.name}</h2>
          <p class = "subtitle"> Type : ${pokeman.type}</p>
    </li>`
    )
    .join("");
  pokedex.innerHTML = PokeString;
}

fetchPokemon();
