const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder created:", dataFolder);
}

//sync way of creating a file
const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "Hello, this is an example file.");
console.log("File created:", filePath);

const readFile = fs.readFileSync(filePath, "utf-8");
console.log("File content:", readFile);

fs.appendFileSync(filePath, "\nAppending some text.");
console.log("File updated:", filePath);

//async way of file creation
const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(
  asyncFilePath,
  "This is an async file creation example.",
  (err) => {
    if (err) throw err;
    console.log("Async file created:", asyncFilePath);

    fs.readFile(asyncFilePath, "utf-8", (err, data) => {
      if (err) throw err;
      console.log("Async file content:", data);

      fs.appendFile(
        asyncFilePath,
        "\nAppending text asynchronously.",
        (err) => {
          if (err) throw err;
          console.log("Async file updated:", asyncFilePath);

          fs.readFile(asyncFilePath, "utf-8", (err, data) => {
            if (err) throw err;
            console.log("Updated async file content:", data);
          });
        }
      );
    });
  }
);
