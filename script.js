//const url = "https://pokeapi.co/api/v2/pokemon/1";

const pokedex = document.getElementById('pokedex')

const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((response) => response.json()));
  }
  Promise.all(promises).then((result) => {
    const pokemon = result.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites.front_default,
      type: data.types.map((type) => type.type.name).toString(),
    }));
    displayPokemon(pokemon);
  });
};

function displayPokemon(pokemon) {
  console.log(pokemon);
}

fetchPokemon();
