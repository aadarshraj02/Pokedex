//const url = "https://pokeapi.co/api/v2/pokemon/1";

const pokedex = document.getElementById("pokedex");

const fetchPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const response = await fetch(url);
  const data = await response.json();
  const pokemon = data.results.map((result, index) => ({
    name: result.name,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));
  displayPokemon(pokemon);
};

function displayPokemon(pokemon) {
  console.log(pokemon);
  const PokeString = pokemon
    .map(
      (pokeman) =>
        `<li class = "card" onclick = "selectPokemon(${pokeman.id})">
          <img class = "image" src = "${pokeman.image}"/>
          <h2 class ="card-title"> ${pokeman.id}. ${pokeman.name}</h2>
    </li>`
    )
    .join("");
  pokedex.innerHTML = PokeString;
}
const selectPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokeman = await response.json();
  displayPopup(pokeman);
};

const displayPopup = (pokeman) => {
  // console.log(pokeman);
  const type = pokeman.types.map((type) => type.type.name).toString();
};

fetchPokemon();
