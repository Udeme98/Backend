const lodash = require("lodash");

const names = ["Udeme", "John", "Jane"];
const capitalizedNames = lodash.map(names, (name) => lodash.capitalize(name));

console.log("Capitalized Names:", capitalizedNames);
