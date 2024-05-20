//const url = "https://pokeapi.co/api/v2/pokemon/1";

const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((response) => response.json()));
  }
  Promise.all(promise).then(results);
};
// fetchPokemon();
