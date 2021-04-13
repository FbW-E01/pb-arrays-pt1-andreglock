let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

console.log("Original Array:", euroCities);

const newCity = "Leipzig";

euroCities[1] = newCity;

console.log("1:", euroCities);

euroCities[0] = "Berlin";

console.log("2:", euroCities);

console.log("3:", euroCities.length);

euroCities.pop();

console.log("4:", euroCities);

euroCities.unshift("Budapest");

console.log("5:", euroCities);

euroCities.splice(1, 2);

console.log("6:", euroCities);

let asianCities = ["Shanghai", "Tokyo", "Almaty", "Kabul", "Marmaris", "Aleppo"];

console.log("7:", asianCities);

let cities = `${asianCities[2]}, ${asianCities[3]}, ${asianCities[4]}`;

console.log("8:", cities);

let worldCities = asianCities.concat(euroCities);

console.log("9:", worldCities);

let revWorldCities = worldCities.reverse();

console.log("10:", revWorldCities);