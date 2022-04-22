const ispwd = require("./pwd");
const isls = require("./ls");
const iscat = require("./cat");
const iscurl = require("./curl");

const done = function (output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt >");
};

process.stdout.write("prompt >");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  ispwd(cmd,done);
  isls(cmd,done);
  iscat(cmd,done);
  iscurl(cmd,done);
});
