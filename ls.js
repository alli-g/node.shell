const fs = require("fs");
const isls = function (cmd, callback) {
  if (cmd === "ls") {
    fs.readdir("./", "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        callback(files.join("\n"));
      }
    });
  }
};

module.exports = isls;
