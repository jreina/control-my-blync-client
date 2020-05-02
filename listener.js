const io = require("socket.io-client")("http://blync-party.herokuapp.com/");
const { default: axios } = require("axios");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

io.connect();

io.on("pattern", (body) => {
  const { pattern } = JSON.parse(body);
  console.log(pattern);
});
let username;

rl.on("line", (answer) => {
  axios.post("http://blync-party.herokuapp.com/set-pattern", {
    pattern: `${username}: ${answer}`,
  });
});

rl.question("What is your username?\n", (name) => {
  username = name;
  console.log("Alright, you're", username);
});
