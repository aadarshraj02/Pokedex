const url = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemon = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};
fetchPokemon();
