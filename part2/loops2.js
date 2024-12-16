// 1
let teas = ["green tea", "black tea", "chai", "oolong tea"];
selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] == "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}

console.log(selectedTeas);

// 2
let cities = ["London", "New York", "Paris", "Berlin"];
let vistedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] == "Paris") {
    continue;
  }
  vistedCities.push(cities[i]);
}
console.log(vistedCities);

// 3
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
  //   console.log(num);
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);

// 4
let teasCombinaton = ["chai", "green tea", "herbel tea", "black tea"];
let preferredTea = [];
for (const tea of teasCombinaton) {
  if (tea == "herbel tea") {
    continue;
  }
  preferredTea.push(tea);
}
console.log(preferredTea);

// 5
let citiesPopulation = {
  London: 8900000,
  NewYork: 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityPopulation = {};
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));
for (const city in citiesPopulation) {
  // console.log(citiesPopulation[city])
  if (city === "Berlin") {
    break;
  }
  cityPopulation[city] = citiesPopulation[city];
}
console.log(cityPopulation);

// 6
let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};
for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities);

// 7
let teaTypes = ["green tea", "black tea", "chai", "oolong tea"];
let availableTea = [];

teaTypes.forEach((tea) => {
  //   console.log(tea);
  if (tea == "chai") {
    return;
  }
  availableTea.push(tea);
});
console.log(availableTea);

// 8

let citiesName = ["Berlin", "Tokyo", "Sydney", "Paris"];
let = travelledCitites = [];

citiesName.forEach((city) => {
  if (city == "Sydney") {
    return;
  }
  travelledCitites.push(city);
});

console.log(travelledCitites);

// 9
let numbersOne = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < numbersOne.length; i++) {
  if (numbersOne[i] == 7) {
    continue;
  }
  doubledNumbers.push(numbersOne[i] * 2);
}

console.log(doubledNumbers);

// 10
let longTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of longTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
