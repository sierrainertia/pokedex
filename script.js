//store select with id pokemonType
let pokemonTypeSelect = document.getElementById("pokemonType");
// set length to 0
pokemonTypeSelect.length = 0;
// Create element option for initial text
let pokemonTypeOption = document.createElement("option");
pokemonTypeOption.text = "Pick a type";

// API Type URL
const typeUrl = "https://pokeapi.co/api/v2/type/";
// store user selection of pokemonType
let pokemonTypeValue = "";
let pokemonTypeText = "";

// add pokemonTypeOption to pokemonTypeSelect
pokemonTypeSelect.add(pokemonTypeOption);
pokemonTypeSelect.selectedIndex = 0;

// Make Call to API
fetch(typeUrl).then(function (response) {
  // if the API returns a non successful status error
  if (response.status !== 200) {
    console.warn("looks like there was a problem");
    return;
  }
  response
    .json()
    .then(function (data) {
      let option;
      // loop through the results length and each time create an option with the value from that data
      for (let i = 0; i < data.results.length; i++) {
        option = document.createElement("option");
        option.text = data.results[i].name;
        option.value = data.results[i].name;
        // add the option to the list
        pokemonTypeSelect.add(option);
      }
    })
    .then(
      pokemonTypeSelect.addEventListener("change", function () {
        pokemonTypeValue = this.options[this.selectedIndex].value;
        pokemonTypeText = this.options[this.selectedIndex].text;
      })
    );
});
console.log(pokemonTypeValue);
