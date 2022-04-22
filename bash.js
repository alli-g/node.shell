const ispwd = require("./pwd");
const isls = require("./ls");
const iscat = require("./cat");

process.stdout.write("prompt >");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  ispwd(cmd);
  isls(cmd);
  iscat(cmd);
});
