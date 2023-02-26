const fs = require("fs");

let data = fs.readFile("read.txt", "utf-8");
console.log(data);