function readFile(file) {
    const fs = require('node:fs');
    const data = fs.readFileSync(file).toString();
    let lines = data.split("\r\n");
  
    return lines;
}

module.exports = {
    readFile
};