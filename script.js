const url = "https://pokeapi.co/api/v2/pokemon/1";

const fetchPokemon = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data);
      const pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        type: data.types.map((type) => type.type.name).toString(),
      };

      console.log(pokemon);
    });
};
// fetchPokemon();
