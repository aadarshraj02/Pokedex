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
  const image = pokeman.sprites.front_default;
  // console.log(pokeman);
  const type = pokeman.types.map((type) => type.type.name).toString();
  const htmlStr = `
  <div class ="popup">
    <button id = "closeBtn" onClick ="closePopup()" >Close</button>
          <div class = "card">
          <img class = "image" src = "${image}"/>
          <h2 class ="card-title"> ${pokeman.id}. ${pokeman.name}</h2>
          <p><small>Height: </small>${pokeman.height}| <small>Weight: </small>${pokeman.weight} | <small>Type: </small>${type}</p>
    </div>
  </div>`;
  pokedex.innerHTML = htmlStr;
  // console.log(html);
};

fetchPokemon();
