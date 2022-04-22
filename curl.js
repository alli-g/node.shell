const request = require("request");

const iscurl = function (cmd, callback) {
  if (cmd.slice(0, 4) === "curl") {
    let linkName = cmd.slice(5, cmd.length);

    request(linkName, function (error, response, body) {
      let responseStr = response.toString().trim();
      let statusStr = response.statusCode.toString().trim();

      process.stdout.write(responseStr && statusStr);

      // process.stdout.write(body)

      callback(body);
    });
  }
};

module.exports = iscurl;
