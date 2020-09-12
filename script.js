let pokemonTypeSelect = document.getElementById("pokemonType");
pokemonTypeSelect.length = 0;
let pokemonTypeOption = document.createElement("option");
pokemonTypeOption.text = "Pick a type";

const url = "https://pokeapi.co/api/v2/type/";

pokemonTypeSelect.add(pokemonTypeOption);
pokemonTypeSelect.selectedIndex = 0;
// Make Call to API
fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      console.warn("looks like there was a problem");
      return;
    }
    response.json().then(function (data) {
      //   console.log(data.results);
      let option;
      for (let i = 0; i < data.results.length; i++) {
        option = document.createElement("option");
        option.text = data.results[i].name;
        option.value = data.results[i].name;
        pokemonTypeSelect.add(option);
      }
    });
  })
  .catch(function (error) {
    // if theres an error getting api
    console.warn("something went wrong", error);
  });
