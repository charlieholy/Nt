var crc = require("crc")
var val =crc.crc32("asd", null).toString(10);
console.log("asd: " + val)