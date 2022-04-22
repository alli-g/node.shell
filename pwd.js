const ispwd = function (cmd, callback) {
  if (cmd === "pwd") {
    callback(process.cwd());
  }
};

module.exports = ispwd;
