// 1
const teaFlavours = ["green tea", "orange tea", "oolong tea"];
const firstTea = teaFlavours[0];
console.log(firstTea);

// 2
const cities = ["London", "Tokoyo", "Paris", "New York"];
const favoriteCity = cities[2];
console.log(favoriteCity);

// 3
const teaTypes = ["herbal tea", "white tea", "masala tea"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

// 4
const citiesVisted = ["Mumbai", "Sydeny"];
citiesVisted.push("Berlin");
console.log(citiesVisted);

// 5
const teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

// 6
const popularTeas = ["green tea", "oolang tea", "chai"];
const softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);

// 7
const topCities = ["Berlin", "Singapore", "New York"];
const hardCopyCities = [...topCities];
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

// 8
const europeanCities = ["Paris", "Rome"];
const asianCities = ["Tokoyo", "Bangkok"];
const worldCities = [...europeanCities, ...asianCities];
console.log(worldCities);

// 9
const teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
const menuLength = teaMenu.length;
console.log(menuLength);

// 10
const cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
const isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);