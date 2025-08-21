//callback hell - having multiple nested callbacks

// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       console.log("Callback hell");
//     }, 4000);
//   });
// });

const fs = require("fs");

function person(name, callbackfn) {
  console.log(`Hello ${name}`);
  callbackfn();
}

function address() {
  console.log("Nigeria");
}

person("Udeme Udeme", address);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }
  console.log(data);
});
