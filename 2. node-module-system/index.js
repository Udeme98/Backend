//module.exports -> exports functionaliy from a module
//require -> import

const firstModule = require("./fast-module");

console.log(firstModule.add(9, 23));

try {
  console.log("trying to divide by zero");
  let result = firstModule.divide(0, 0);
  console.log(result);
} catch (error) {
  console.log("Caught an error", error.message);
}

//module wrapper
(function (exports, require, module, __filename, __dirname) {
  // Your module code here
});
