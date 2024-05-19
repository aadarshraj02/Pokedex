const url = "https://pokeapi.co/api/v2/pokemon/1";

const fetchPokemon = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const pokemon = {};
      pokemon["name"] = data.name;
      console.log(pokemon);
    });
};
fetchPokemon();
