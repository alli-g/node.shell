const fs = require("fs");

const cat = function (cmd,callback) {
  if (cmd.slice(0, 3) === "cat") {
    let filename = cmd.slice(4, cmd.length);
    let directory = process.cwd().toString().trim();
    fs.readFile(directory + "/" + filename, (err, data) => {
      if (err) {
        throw err;
      } else {
        callback(data);
      }
    });
  }
};

module.exports = cat;
