const path = require("path");
console.log("Directory Name:", path.dirname(__filename));
console.log("File Name:", path.basename(__filename));
console.log("File Extension:", path.extname(__filename));

const joinedPath = path.join("/user", "document", "node", "projects");
console.log("Joined Path:", joinedPath);

//resolve path
const resolvedPath = path.resolve("user", "document", "node", "projects");
console.log("Resolved Path:", resolvedPath);

//normalize path
const normalizedPath = path.normalize("/user/.document/../node/projects/");
console.log("Normalized Path:", normalizedPath);
