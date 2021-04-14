let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

console.log("Original Array:", euroCities);

const newCity = euroCities[1];

console.log("1:", newCity);

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

let cities = asianCities.slice(1, 4);

console.log("8:", cities);

let worldCities = asianCities.concat(euroCities);

console.log("9:", worldCities);

let revWorldCities = worldCities.reverse();

console.log("10:", revWorldCities);

worldCities[2] = 'Toronto';

console.log("11:", worldCities);

worldCities.splice(1, 0, "Washington");

console.log("12:", worldCities);

console.log("13:", worldCities.join(", "))

const hello = "Hello World";
const splitHello = hello.split("");
const revSplitHello = splitHello.reverse();

console.log("Bonus 1:", revSplitHello.join(""));

let siblings = ["kevin", "Kate", "Randall"];

console.log("Extra 1:", siblings);

let parents = ["Jack", "Rebecca"];

console.log("Extra 2:", parents);

let allNames = siblings.concat(parents);

console.log("Extra 3:", allNames);

let pets = ["Audio", "Linda"];

console.log("Extra 4:", pets);

console.log("Extra 5:", pets.reverse());

console.log("Extra 6:", parents[0]);

parents[0] = "Nicky";

console.log("Extra 7:", parents);